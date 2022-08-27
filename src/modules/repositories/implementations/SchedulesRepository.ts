import { Schedule } from '../../model/Schedules';
import { IScheduleDTO, IScheduleRepository } from '../ISchedulesRepository';

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
  create({ type, roleSchedule, intervals }: IScheduleDTO): void {
    const schedule = new Schedule();
    Object.assign(schedule, {
      type,
      roleSchedule,
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

  findByDate(start: string, end:string):Schedule[]{
    const schedule = this.schedules.filter(schedule=>{
      if(schedule.type ==='onlyOne'){
        return schedule
      }
    })
    return schedule
  }

  delete(id: string): Schedule[] {
    const schedules = this.schedules.filter(schedule => schedule.id !== id);
    this.schedules = schedules;
    return schedules;
  }
}

export { SchedulesRepository };
