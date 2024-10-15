import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as CookieParser from 'cookie-parser';
import "dotenv/config";

const port = process.env.PORT || 3004;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(CookieParser());
  await app.listen(port, () => console.log(`server is running on port ${port}`));
}
bootstrap();
