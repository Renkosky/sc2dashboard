import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dashboard } from './entity/dashboard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DashboardService {
  constructor() // @InjectRepository(Dashboard)
  // private readonly dashboardRepository: Repository<Dashboard>,
  {}
  //Promise<Dashboard[]>
  async findAll(): Promise<string> {
    return 'dashboardRepository.find()';
    // return await this.dashboardRepository.find();
  }
}
