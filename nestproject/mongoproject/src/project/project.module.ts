import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Devloper, DevloperSchema } from './schemas/devloper.schema';
import { Project, ProjectSchema } from './schemas/project.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      { name: Devloper.name,schema: DevloperSchema},
      { name: Project.name, schema: ProjectSchema}
    ])
  ],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
