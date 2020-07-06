import { Test, TestingModule } from '@nestjs/testing';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
describe('Dashboard Controller', () => {
  let controller: DashboardController;
  let services: DashboardService;
  beforeEach(async () => {
    // const module: TestingModule = await Test.createTestingModule({
    //   controllers: [DashboardController],
    // }).compile();
    // controller = module.get<DashboardController>(DashboardController);
    services = new DashboardService();
    controller = new DashboardController(services);
  });

  it('dashboard spec', () => {
    expect(controller.index()).toBe('dashboard');
  });
});
