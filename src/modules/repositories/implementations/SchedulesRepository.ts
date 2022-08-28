import { convertDate } from '../../../utils/convertDate';
import { Schedule } from '../../model/Schedules';
import {
  IListSchedulesAvaliable,
  IScheduleDTO,
  IScheduleRepository
} from '../ISchedulesRepository';

class SchedulesRepository implements IScheduleRepository {
  private schedules: Schedule[];
  private static INSTANCE: SchedulesRepository;
  private constructor() {
    this.schedules = [];
  }

  public static getInstance(): SchedulesRepository {
    if (!SchedulesRepository.INSTANCE) {
      SchedulesRepository.INSTANCE = new SchedulesRepository();
    }
    return SchedulesRepository.INSTANCE;
  }
  create({ type, day, intervals }: IScheduleDTO): void {
    const schedule = new Schedule();
    Object.assign(schedule, {
      type,
      day,
      intervals,
      created_at: new Date()
    });
    this.schedules.push(schedule);
  }

  list(): Schedule[] {
    return this.schedules;
  }

  findById(id: string): Schedule {
    const schedule = this.schedules.find(schedule => schedule.id === id);
    return schedule;
  }

  findByDate(start: string, end: string): Schedule[] {
    convertDate(start);
    const newSchedule: IListSchedulesAvaliable | any = [];
    const schedule = this.schedules.filter(schedule => {
      if (schedule.type === 'onlyOne') {
        if (
          convertDate(schedule.day) >= convertDate(start) &&
          convertDate(schedule.day) <= convertDate(end)
        ) {
          newSchedule.push({
            day: schedule.day,
            intervals: schedule.intervals
          });
        }
      }
      if (schedule.type === 'everyDay') {
        let count = 0;
        while (convertDate(start) + count <= convertDate(end)) {
          let formatedDate = new Date(
            convertDate(start) + count
          ).toLocaleDateString();
          formatedDate = formatedDate.replace('/', '-').replace('/', '-');
          count += 86400000;
          newSchedule.push({
            day: formatedDate,
            intervals: schedule.intervals
          });
        }
      }
      if (schedule.type === 'week') {
        let count = 0;
        while (convertDate(start) + count <= convertDate(end)) {
          let dayDate = new Date(convertDate(start) + count).getDay();
          if (schedule.day.includes(`${dayDate}`)) {
            let formatedDate = new Date(
              convertDate(start) + count
            ).toLocaleDateString();
            formatedDate = formatedDate.replace('/', '-').replace('/', '-');
            newSchedule.push({
              day: formatedDate,
              intervals: schedule.intervals
            });
          }
          count += 86400000;
        }
      }
    });

    return newSchedule;
  }



  delete(id: string): Schedule[] {
    const schedules = this.schedules.filter(schedule => schedule.id !== id);
    this.schedules = schedules;
    return schedules;
  }
}

export { SchedulesRepository };
