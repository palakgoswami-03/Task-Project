import { Controller, Get, Post } from '@nestjs/common';
import { Project } from './schemas/project.schema';
import { ProjectService } from './project.service';
import { Devloper } from './schemas/devloper.schema';

@Controller('project')
export class ProjectController {
    constructor(private readonly service:ProjectService){}

    @Post('seed')
    seedData(){
        return this.service.seed();
    }
    @Get('devlopers')
    getDevlopers(){
        return this.service.getDevelopers();
    }
    @Get()
    getProject(){
        return this.service.getProjects();
    }
}
