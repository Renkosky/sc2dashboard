import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}
  @Get()
  index(): any {
    return 'dashboard';
    // return this.dashboardService.findAll();
  }
}
