import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Normative, NormativeDocument } from "./schemas/normative.schema";
import { Model } from "mongoose";
import { CreateNormativeDto } from "./dto/create-normative.dto";

@Injectable()
export class NormativesService {
  constructor(
    @InjectModel(Normative.name)
    private normativeModel: Model<NormativeDocument>,
  ) {}

  async create(dto: CreateNormativeDto): Promise<Normative> {
    const normative = await this.normativeModel.create({ ...dto });
    return normative;
  }

  async getAll(): Promise<Normative[]> {
    const normatives = await this.normativeModel.find();
    return normatives;
  }

  async patch() {}

  async add() {}

  async delete() {}
}
