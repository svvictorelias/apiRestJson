import { AppError } from "../../../errors/AppError";
import { IScheduleRepository } from "../../repositories/ISchedulesRepository";

class DeleteScheduleUseCase{
  constructor(private schedulesRepository: IScheduleRepository) {}

  execute(id:string):void{
    const scheduleExists = this.schedulesRepository.findById(id)
    if(!scheduleExists){
      throw new AppError("Schedule don't exists!",404)
    }
    this.schedulesRepository.delete(id)
  }
}

export {DeleteScheduleUseCase}