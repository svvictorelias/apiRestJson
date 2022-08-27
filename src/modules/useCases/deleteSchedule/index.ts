import { SchedulesRepository } from '../../repositories/implementations/SchedulesRepository';
import { DeleteScheduleController } from './DeleteScheduleController';
import { DeleteScheduleUseCase } from './DeleteScheduleUseCase';

const schedulesRepository = SchedulesRepository.getInstance();
const deleteScheduleUseCase = new DeleteScheduleUseCase(schedulesRepository);
const deleteScheduleController = new DeleteScheduleController(
  deleteScheduleUseCase
);

export { deleteScheduleController };
