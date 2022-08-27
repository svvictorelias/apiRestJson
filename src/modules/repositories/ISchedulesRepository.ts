import { Schedule } from '../model/Schedules';

interface IIntervals {
  start: string;
  end: string;
}

interface IScheduleDTO {
  type: string;
  roleSchedule: string;
  intervals: IIntervals[];
}

interface IScheduleRepository {
  list(): Schedule[];
  findById(id: string): Schedule;
  create({ type, roleSchedule, intervals }: IScheduleDTO): void;
  delete(id: string): Schedule[];
}

export { IScheduleDTO, IScheduleRepository, IIntervals };
