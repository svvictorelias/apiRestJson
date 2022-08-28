import { Schedule } from '../../model/Schedules';
import { IListSchedulesAvaliable, IScheduleDTO, IScheduleRepository } from '../ISchedulesRepository';

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
    this.convertDate(start);
    const newSchedule: IListSchedulesAvaliable | any = []
    const schedule = this.schedules.filter(schedule => {
      if (schedule.type === 'onlyOne') {
        if (
          this.convertDate(schedule.day) >= this.convertDate(start) &&
          this.convertDate(schedule.day) <= this.convertDate(end)
        ) {
          newSchedule.push({day: schedule.day, intervals: schedule.intervals})
        }
      }
      if(schedule.type === 'everyDay'){
        let count = 0
        while(this.convertDate(start)+count<=this.convertDate(end)){
          let formatedDate = new Date(this.convertDate(start)+count).toLocaleDateString()
          formatedDate = formatedDate.replace('/','-')
          formatedDate = formatedDate.replace('/','-')
          console.log(formatedDate)
          count+=86400000
          newSchedule.push({day: formatedDate, intervals: schedule.intervals})
        }
      }
    });

    return newSchedule;
  }

  convertDate(date: string): number {
    const splitDate = date.split('-');
    const newDate = new Date(
      `${splitDate[2]},${splitDate[1]},${splitDate[0]}`
    ).getTime();
    return newDate;
  }

  delete(id: string): Schedule[] {
    const schedules = this.schedules.filter(schedule => schedule.id !== id);
    this.schedules = schedules;
    return schedules;
  }
}

export { SchedulesRepository };
