import { Module } from "@nestjs/common";
import { NormativesController } from "./normatives.controller";
import { NormativesService } from "./normatives.servise";
import { MongooseModule } from "@nestjs/mongoose";
import { Normative, NormativeSchema } from "./schemas/normative.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Normative.name, schema: NormativeSchema },
    ]),
  ],
  controllers: [NormativesController],
  providers: [NormativesService],
})
export class NormativesModule {}
