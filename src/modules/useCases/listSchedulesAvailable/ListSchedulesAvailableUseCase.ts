import { Schedule } from "../../model/Schedules";
import { IScheduleRepository } from "../../repositories/ISchedulesRepository";

interface IRequest{
  start: string,
  end:string
}

class ListSchedulesAvailableUseCase{
  constructor(private schedulesRepository: IScheduleRepository) {}

  execute({start, end}:IRequest): Schedule[]{
    const schedules = this.schedulesRepository.findByDate(start, end)
    return schedules
  }
}

export {ListSchedulesAvailableUseCase}