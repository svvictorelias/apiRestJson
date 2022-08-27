import { IScheduleRepository } from "../../repositories/ISchedulesRepository";

class DeleteScheduleUseCase{
  constructor(private schedulesRepository: IScheduleRepository) {}

  execute(id:string):void{
    const scheduleExists = this.schedulesRepository.findById(id)
    if(!scheduleExists){
      throw new Error("Schedule don't exists!")
    }
    this.schedulesRepository.delete(id)
  }
}

export {DeleteScheduleUseCase}