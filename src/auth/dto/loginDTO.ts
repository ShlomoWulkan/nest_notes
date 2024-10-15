import { IsString, MinLength } from 'class-validator';

export class LoginDTO {
    @IsString()
    username: string;

    @IsString()
    password: string;
}