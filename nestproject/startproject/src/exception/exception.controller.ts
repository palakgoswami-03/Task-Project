import { Controller, Get, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filters/http_exception/http_exception.filter';

@Controller('exception')
@UseFilters(HttpExceptionFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id',ParseIntPipe)id:number){
        return {mssage : `Your ID id: ${id}`}

    }
}
