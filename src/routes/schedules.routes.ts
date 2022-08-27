import { response, Router } from 'express';
import { createScheduleController } from '../modules/useCases/createSchedule';
import { deleteScheduleController } from '../modules/useCases/deleteSchedule';
import { listSchedulesController } from '../modules/useCases/listSchedules';


const schedulesRoutes = Router();

schedulesRoutes.get('/', (request, response) => {
  return listSchedulesController.handle(request,response)
});

schedulesRoutes.post('/', (request, response) => {
  return createScheduleController.handle(request, response);
});

schedulesRoutes.delete('/delete/:id',(request, response)=>{
  return deleteScheduleController.handle(request, response)
})
export { schedulesRoutes };
