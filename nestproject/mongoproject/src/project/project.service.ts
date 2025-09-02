import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Devloper } from './schemas/devloper.schema';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Devloper.name)private devloperModel: Model<Devloper>,
        @InjectModel(Project.name)private ProjectModel: Model<Project>,
    ){}

    async seed():Promise<{dev1: Devloper; dev2: Devloper}>{
        const[ProjectA, ProjectB] = await Promise.all([
            this.ProjectModel.create({
                title: 'Nest CRM'
            }),
            this.ProjectModel.create({
                title: 'MONGO CRM'
            })
        ]);

        const [dev1, dev2] = await Promise.all([
            this.devloperModel.create({
                name: 'Palak',
                projects:[ProjectA._id,ProjectB._id]
            }), 
            this.devloperModel.create({
                name: 'vihan',
                projects:[ProjectA._id,],
            })
        ])

        await Promise.all([
            this.ProjectModel.findByIdAndUpdate
            (ProjectA._id,{
                $set:{ devlopers: [dev1._id, dev2._id]}
            }),
            this.ProjectModel.findByIdAndUpdate
            (ProjectB._id,{
                $set:{ devlopers: [dev1._id]}
            })

        ])
        return {dev1, dev2};
    }
    async getDevelopers():Promise<Devloper[]>{
        return this.devloperModel.find().populate('projects').lean();
    }
    async getProjects():Promise<Project[]>{
        return this.ProjectModel.find().populate('devlopers').lean();
    }
}
