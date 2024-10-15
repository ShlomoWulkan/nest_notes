import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

import "dotenv/config";

const connectionUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nest_notes';
@Module({
  imports: [
    MongooseModule.forRoot(connectionUri),
    UserModule,
    NotesModule,
    AuthModule,
  ],
})
export class AppModule {}
