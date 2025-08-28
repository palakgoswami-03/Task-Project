import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';
import { CreateCustomerDto } from './dto/create_customer.dto';

@Injectable()
export class CustomerService {
    private customers: Customer[] = [];

    getAllCustomer(): Customer[]{
        return this.customers;
    }

    addCustomer(createCustomerDto: CreateCustomerDto) : 
    Customer{
        const newCustomer: Customer = {
            id: Date.now(),
            ...createCustomerDto,

        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

}
