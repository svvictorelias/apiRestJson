import {
  IIntervals,
  IScheduleRepository
} from '../../repositories/ISchedulesRepository';

interface IRequest {
  type: string;
  day: string;
  intervals: IIntervals[];
}

class CreateScheduleUseCase {
  constructor(private schedulesRepository: IScheduleRepository) {}

  execute({ type, day, intervals }: IRequest): void {
    this.schedulesRepository.create({ type, day, intervals });
  }
}

export { CreateScheduleUseCase };
