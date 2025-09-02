import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees.entity';
import { Repository } from 'typeorm';
import { notDeepEqual } from 'assert';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepositery: Repository<Employee>
    ){}


    async create(employeeData: Partial<Employee>):Promise<Employee>{
        const employee = this.employeeRepositery.create(employeeData)
        return this.employeeRepositery.save(employee);
    }

    async findAll(): Promise<Employee[]>{
        return this.employeeRepositery.find();
    }

    async findOne(id: number): Promise<Employee>{
        const employee = await this.employeeRepositery.findOneBy({id})
        if(!employee){
            throw new NotFoundException(`Employee With ID ${id} not found`)
        }
        return employee;
         }

    async update(id: number,updatedData: Partial<Employee>): Promise<Employee>{
        const employee = await this.employeeRepositery.findOneBy({
            id});
            if(!employee){
                throw new NotFoundException(`Employee With ID ${id} not found`);
            }
            const updated = Object.assign(employee,updatedData);
            return this.employeeRepositery.save(updated);
      }
      
    async delete(id: number):Promise<{message: string}>{
        const result = await this.employeeRepositery.delete(id);

        if(result.affected === 0){
            throw new NotFoundException(`Employee with ID ${id} not found`)
        }
        return { message: `Employee with ID ${id} has been deleted successfully`}
    }
    

    async search(filters:{name?:string; department?:string}):Promise<Employee[]>{
        const query = this.employeeRepositery.createQueryBuilder('employee');
      
        if(filters.name){
            query.andWhere('employee.name ILIKE :name', {name:`%${filters.name}%`});
        }

        if(filters.department){
            query.andWhere('employee.department =  :dept',{dept: filters.department}
            );
        }

        return query.getMany();
    }

}
