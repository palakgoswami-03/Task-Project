import { Injectable,OnModuleInit ,OnApplicationShutdown} from '@nestjs/common';
// import { disconnect } from 'process';

@Injectable()
export class DatabaseService {
    private isConnected = false;
    onModuleInit(){
        this.isConnected = true;
        console.log(`DataBase Connected`);

    };
    onApplicationShutDown(Signal : string){
        this.isConnected=false;
        console.log(`Database Disconnected due to app shutdown. 
            Signal ${Signal}`)
    }

    getStatus(){
        return this.isConnected ?'Connected' : 'Disconnect';
    }
}
