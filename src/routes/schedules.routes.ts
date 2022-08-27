import { Router } from 'express';
import { createScheduleController } from '../modules/useCases/createSchedule';
import { listSchedulesController } from '../modules/useCases/listSchedules';


const schedulesRoutes = Router();

schedulesRoutes.get('/', (request, response) => {
  return listSchedulesController.handle(request,response)
});

schedulesRoutes.post('/', (request, response) => {
  return createScheduleController.handle(request, response);
});
export { schedulesRoutes };
