import {
  IIntervals,
  IScheduleRepository
} from '../../repositories/ISchedulesRepository';

interface IRequest {
  type: string;
  roleSchedule: string;
  intervals: IIntervals[];
}

class CreateScheduleUseCase {
  constructor(private schedulesRepository: IScheduleRepository) {}

  execute({ type, roleSchedule, intervals }: IRequest): void {
    this.schedulesRepository.create({ type, roleSchedule, intervals });
  }
}

export { CreateScheduleUseCase };
