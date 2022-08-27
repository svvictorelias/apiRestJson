import { Schedule } from "../../model/Schedules";
import { IScheduleRepository } from "../../repositories/ISchedulesRepository";


class ListSchedulesUseCase{
  constructor(private schedulesRepository: IScheduleRepository){}

  execute(): Schedule[]{
    const schedules = this.schedulesRepository.list()
    return schedules
  }
}

export {ListSchedulesUseCase}