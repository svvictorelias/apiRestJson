import { Request, Response } from 'express';
import { ListSchedulesUseCase } from './ListSchedulesUseCase';

class ListSchedulesController {
  constructor(private listSchedulesUseCase: ListSchedulesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listSchedulesUseCase.execute();
    return response.json(all);
  }
}

export { ListSchedulesController };
