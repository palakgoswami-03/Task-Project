import {
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserInterface } from '../interfaces/user.interfaces';

export class LoginDto implements Partial<UserInterface> {

  @ApiProperty({
    description: 'User email address',
    example: 'palak@example.com',
  })
  @IsEmail({}, { message: 'Invalid email format' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    description: 'Password (minimum 8 characters)',
    minLength: 8,
    example: 'password123',
  })
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}