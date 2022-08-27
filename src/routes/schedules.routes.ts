import { response, Router } from 'express';
import { createScheduleController } from '../modules/useCases/createSchedule';
import { deleteScheduleController } from '../modules/useCases/deleteSchedule';
import { listSchedulesController } from '../modules/useCases/listSchedules';
import { listSchedulesAvailableController } from '../modules/useCases/listSchedulesAvailable';


const schedulesRoutes = Router();

schedulesRoutes.get('/', (request, response) => {
  return listSchedulesController.handle(request,response)
});

schedulesRoutes.get('/schedulesAvailable',(request, response)=>{
  return listSchedulesAvailableController.handle(request, response)
})

schedulesRoutes.post('/', (request, response) => {
  return createScheduleController.handle(request, response);
});

schedulesRoutes.delete('/delete/:id',(request, response)=>{
  return deleteScheduleController.handle(request, response)
})
export { schedulesRoutes };
