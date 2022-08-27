import { SchedulesRepository } from '../../repositories/implementations/SchedulesRepository';
import { ListSchedulesController } from './ListSchedulesController';
import { ListSchedulesUseCase } from './ListSchedulesUseCase';

const schedulesRepository = SchedulesRepository.getInstance();

const listSchedulesUseCase = new ListSchedulesUseCase(schedulesRepository);

const listSchedulesController = new ListSchedulesController(
  listSchedulesUseCase
);

export { listSchedulesController };
