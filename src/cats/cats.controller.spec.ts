import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(() => {
    catsService = new CatsService();
    catsController = new CatsController(catsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [];
      console.log(catsController, 'controllercontrollercontroller');
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
      expect(await catsController.index()).toBe(result);
    });
  });
});
// describe('Cats Controller', () => {
//   let controller: CatsController;
//   let catsService: CatsService;
//   beforeEach(async () => {
//     catsService = new CatsService();
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CatsController],
//     }).compile();

//     controller = module.get<CatsController>(CatsController);
//   });

//   describe('findall', () => {
//     it('return cats array', () => {
//       const result = [];
//       jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
//       console.log(controller, 'controllercontrollercontroller');
//       expect(controller.index()).toBe(result);
//     });
//   });
// });
