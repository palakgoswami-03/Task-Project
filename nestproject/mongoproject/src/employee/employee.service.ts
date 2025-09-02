import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectModel(Employee.name) private employeeModel: Model<Employee>,
        @InjectModel(Profile.name) private ProfileModel: Model<Profile>,
    ){}

    async createEmployee(): Promise<Employee>{
        const profile = await new this.ProfileModel({
            age:20,
            qualification:'Masters'
        }).save();
        const employee = new this.employeeModel({
            name: "palak",
            profile:profile._id
        })
        
        return employee.save();
    }
    async findAll(): Promise<Employee[]> {
        return this.employeeModel.find().populate('profile').exec();
    }

}