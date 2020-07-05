import {
  Controller,
  Get,
  Req,
  Query,
  Param,
  Post,
  Body,
  HttpCode,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';
import { CatsService } from './cats.service';
interface IdParam {
  id: number;
}

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Get()
  index(): any {
    const a = this.catService.findAll();
    return a;
  }

  @Get('dogs')
  add(): string {
    return '这是cats里面的dogs';
  }

  @Post()
  @HttpCode(200)
  async create(@Body() cat: CreateCatDto): Promise<string> {
    // console.log(request);
    this.catService.create(cat);
    return 'This action adds a new cat';
  }

  @Get(':id')
  findOne(@Param() param: IdParam): string {
    console.log(typeof param.id);
    return `This action returns ${param.id} cats`;
  }
}
