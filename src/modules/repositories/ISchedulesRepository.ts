import { Schedule } from '../model/Schedules';

interface IIntervals {
  start: string;
  end: string;
}
interface IListSchedulesAvaliable {
  day: string;
  intervals: IIntervals[];
}

interface IScheduleDTO {
  type: string;
  day: string;
  intervals: IIntervals[];
}

interface IScheduleRepository {
  list(): Schedule[];
  findById(id: string): Schedule;
  findByDate(start: string, end: string): Schedule[];
  create({ type, day, intervals }: IScheduleDTO): void;
  delete(id: string): Schedule[];
}

export {
  IScheduleDTO,
  IScheduleRepository,
  IIntervals,
  IListSchedulesAvaliable
};
