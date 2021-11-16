import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('tiny'));

  app.enableCors()

  // set pipes
  app.useGlobalPipes(new ValidationPipe())

  // set container for validate
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // set swagger
  const config = new DocumentBuilder()
    .setTitle('MPI CMS Microservice APIs')
    .setDescription('Descriptions for MPI Content Management Service APIs')
    .setVersion('1.0')
    .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/api', app, document)


  await app.listen( process.env.PORT || 3050 );
}
bootstrap();
