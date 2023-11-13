import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NormativesModule } from "./normatives/normatives.module";

const environment: string = process.env.NODE_ENV || "development"; // not correct work

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    NormativesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
