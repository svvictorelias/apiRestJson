import { SchedulesRepository } from "../../repositories/implementations/SchedulesRepository";
import { ListSchedulesAvailableController } from "./ListSchedulesAvailableController";
import { ListSchedulesAvailableUseCase } from "./ListSchedulesAvailableUseCase";


const schedulesRepository = SchedulesRepository.getInstance();

const listSchedulesAvailableUseCase = new ListSchedulesAvailableUseCase(schedulesRepository)

const listSchedulesAvailableController = new ListSchedulesAvailableController(listSchedulesAvailableUseCase)

export {listSchedulesAvailableController}