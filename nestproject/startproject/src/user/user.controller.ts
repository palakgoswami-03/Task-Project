import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('user')//baseroute
export class UserController {
    @Get()
    getuser(){
        return "userdata >>  fetched successfully!!!";
    }
}
 