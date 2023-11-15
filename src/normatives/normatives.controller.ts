import {
  Controller,
  Delete,
  Get,
  Patch,
  Put,
  Post,
  Body,
} from "@nestjs/common";
import { NormativesService } from "./normatives.servise";
import { CreateNormativeDto } from "./dto/create-normative.dto";
import { Normative } from "./schemas/normative.schema";

@Controller("normatives")
export class NormativesController {
  constructor(private normativesService: NormativesService) {}

  @Post()
  async create(@Body() dto: CreateNormativeDto) {
    return this.normativesService.create(dto);
  }

  @Get()
  async getAll(): Promise<Normative[]> {
    const normatives = await this.normativesService.getAll();

    return normatives;
  }

  @Patch()
  patch() {}

  @Put()
  add() {}

  @Delete()
  delete() {}
}
