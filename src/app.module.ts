import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [
    UserModule,
    NotesModule,
  ],
})
export class AppModule {}
