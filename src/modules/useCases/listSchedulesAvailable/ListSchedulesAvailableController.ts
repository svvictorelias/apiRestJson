import { Request, Response } from "express";
import { ListSchedulesAvailableUseCase } from "./ListSchedulesAvailableUseCase";


class ListSchedulesAvailableController{
  constructor(private listSchedulesAvailableUseCase: ListSchedulesAvailableUseCase){}

  handle(request: Request, response: Response): Response{
    const {start, end} = request.body
    const schedules = this.listSchedulesAvailableUseCase.execute({start,end})
    return response.status(200).send(schedules)
  }
}

export{ListSchedulesAvailableController}