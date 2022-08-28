import { Request, Response } from 'express';
import { CreateScheduleUseCase } from './CreateScheduleUseCase';

class CreateScheduleController {
  constructor(private createScheduleUseCase: CreateScheduleUseCase) {}

  handle(request: Request, response: Response): Response {
    const { type, day, intervals } = request.body;
    this.createScheduleUseCase.execute({ type, day, intervals });
    return response.status(201).send();
  }
}

export { CreateScheduleController };
