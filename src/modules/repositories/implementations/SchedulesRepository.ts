import { AppError } from '../../../errors/AppError';
import { Schedule } from '../../model/Schedules';
import { IScheduleDTO, IScheduleRepository } from '../ISchedulesRepository';
const fs = require('fs');

class SchedulesRepository implements IScheduleRepository {
  private schedules: Schedule[];
  private static INSTANCE: SchedulesRepository;

  private constructor() {
    this.init().then(resp => {
      this.schedules = resp ? JSON.parse(resp) : [];
    });
  }

  public static getInstance(): SchedulesRepository {
    if (!SchedulesRepository.INSTANCE) {
      SchedulesRepository.INSTANCE = new SchedulesRepository();
    }
    return SchedulesRepository.INSTANCE;
  }

  async init() {
    try {
      const data = await fs.promises.readFile(
        './data/dataSchedules.json',
        'utf8'
      );
      return data;
    } catch (err) {
      throw new AppError('Ocorreu um erro ao iniciar aplicação', 500);
    }
  }
  async create({ type, day, intervals }: IScheduleDTO): Promise<void> {
    const schedule = new Schedule();
    Object.assign(schedule, {
      type,
      day,
      intervals,
      created_at: new Date()
    });
    this.schedules.push(schedule);
    fs.writeFile(
      './data/dataSchedules.json',
      JSON.stringify(this.schedules),
      err => {
        if (err) throw err;
      }
    );
  }

  list(): Schedule[] {
    return this.schedules;
  }

  findById(id: string): Schedule {
    const schedule = this.schedules.find(schedule => schedule.id === id);
    return schedule;
  }

  delete(id: string): Schedule[] {
    const schedules = this.schedules.filter(schedule => schedule.id !== id);
    this.schedules = schedules;
    return schedules;
  }
}

export { SchedulesRepository };
