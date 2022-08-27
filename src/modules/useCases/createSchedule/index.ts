import { SchedulesRepository } from '../../repositories/implementations/SchedulesRepository';
import { CreateScheduleController } from './CreateScheduleController';
import { CreateScheduleUseCase } from './CreateScheduleUseCase';

const schedulesRepository = SchedulesRepository.getInstance();
const createScheduleUseCase = new CreateScheduleUseCase(schedulesRepository);
const createScheduleController = new CreateScheduleController(
  createScheduleUseCase
);

export { createScheduleController };
