import { IsString, IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(6, { message: 'username is too short' })
    username: string;

    @IsString()
    @MinLength(4, { message: 'password is too short' })
    password: string;

    @IsEmail()
    @IsString()
    email: string;
}
