import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';
import Bugsnag from '@bugsnag/js';
import BugsnagPluginExpress from '@bugsnag/plugin-express';

dotenv.config()

Bugsnag.start({
  apiKey: process.env.BUGSNAG_KEY,
  plugins: [BugsnagPluginExpress],
});

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
    .setTitle('MPI Product Microservice APIs')
    .setDescription('Descriptions for MPI Product Management Service APIs')
    .setVersion('1.0')
    .build()

    const document = SwaggerModule.createDocument(app, config)

    SwaggerModule.setup('/api', app, document)

  // set bugsnag
  const bugsnagMiddleware = Bugsnag.getPlugin('express');
  app.use(bugsnagMiddleware.requestHandler);
  app.use(bugsnagMiddleware.errorHandler);

  await app.listen( process.env.PORT || 3050 );
}
bootstrap();
