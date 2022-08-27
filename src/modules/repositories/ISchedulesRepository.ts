import { Schedule } from "../model/Schedules";

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
  list(): Schedule[]
  create({ type, roleSchedule, intervals }: IScheduleDTO): void;
}

export { IScheduleDTO, IScheduleRepository, IIntervals };
