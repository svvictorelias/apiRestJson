import { AppError } from '../../../errors/AppError';
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
    if(!type){
      throw new AppError("type params it's required",400)
    }
    if(!day){
      throw new AppError("day params it's required",400)
    }
    if(!intervals){
      throw new AppError("intervals params it's required",400)
    }
    intervals.map(interval=>{
      if(!interval.start || !interval.end){
        throw new AppError("interval start and end is required",400)
      }
    })
    this.schedulesRepository.create({ type, day, intervals });
  }
}

export { CreateScheduleUseCase };
