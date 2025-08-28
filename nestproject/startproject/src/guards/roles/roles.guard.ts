import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { stringify } from 'querystring';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(
      ROLES_KEY,[
        context.getHandler(),
        context.getClass(),
      ]
    );
    if(!requiredRoles) return true;
    const request = context.switchToHttp().getRequest<{headers:Record<string,string>}>();
    const userRole = request.headers['x-user-role'] as Role;
    return requiredRoles.includes(userRole);
    return true;
  }
}
