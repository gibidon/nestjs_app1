// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import mongoose from 'mongoose';
// import { Logger } from '@nestjs/common';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.setGlobalPrefix('api');
//   await app.listen(process.env.PORT ?? 4000);
//   console.log('MongoDB connection state:', mongoose.connection.readyState);

//   const logger = new Logger('MongoDebug');
//   logger.log(`MongoDB connection state: ${mongoose.connection.readyState}`);

//   mongoose.connection.on('connected', () => logger.log('✅ MongoDB connected'));
//   mongoose.connection.on('error', (err) =>
//     logger.error('❌ MongoDB error', err),
//   );
//   mongoose.connection.on('disconnected', () =>
//     logger.warn('⚠️ MongoDB disconnected'),
//   );
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 4000);

  const logger = new Logger('MongoDebug');

  const connection: Connection = app.get(getConnectionToken());

  connection.on('connected', () => logger.log('✅ MongoDB connected'));
  connection.on('error', (err) => logger.error('❌ MongoDB error', err));
  connection.on('disconnected', () => logger.warn('⚠️ MongoDB disconnected'));

  logger.log(`MongoDB connection state: ${connection.readyState}`);
}
bootstrap();
