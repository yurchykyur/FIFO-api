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

@Controller("normatives")
export class NormativesController {
  constructor(private normativesService: NormativesService) {}

  @Post()
  async create(@Body() dto: CreateNormativeDto) {
    return this.normativesService.create(dto);
  }

  @Get()
  getAll() {
    return "work";
  }

  @Patch()
  patch() {}

  @Put()
  add() {}

  @Delete()
  delete() {}
}
