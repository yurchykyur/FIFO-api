import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type NormativeDocument = HydratedDocument<Normative>;

@Schema()
export class Normative {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  link: string;

  @Prop({ required: false })
  subtitle: string;

  @Prop({ required: false })
  description: string[];
}

export const NormativeSchema = SchemaFactory.createForClass(Normative);
