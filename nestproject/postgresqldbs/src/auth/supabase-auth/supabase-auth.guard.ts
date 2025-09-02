import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseAuthGuard implements CanActivate {
  constructor (private configService: ConfigService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.headers['authorization'];
    if(!authHeader || !authHeader.startsWith('Bearer ')){
      throw new UnauthorizedException('No Token Provided!');
    }
    const token = authHeader.split(' ')[1];
    const jwtsecret = this.configService.get<string>('SUPABASE_jwt_SECRET');
    if(!jwtsecret){
      throw new UnauthorizedException('JWT Secrete not found');
    }
    try{
      const decode = jwt.verify(token,jwtsecret);
      request['user']= decode;
      return true;
    }
    catch(error){
      throw new UnauthorizedException('Invalid token')
    }
  }
}
