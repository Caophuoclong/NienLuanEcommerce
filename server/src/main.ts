import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RolesGuard } from './auth/roles.guard';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle("Ecommerce Application")
  .setVersion("1.0")
  .build();
  const documet = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/api",app, documet);
  app.setGlobalPrefix("/api");
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.use(cookieParser())
  await app.listen(3003);
}
bootstrap();
