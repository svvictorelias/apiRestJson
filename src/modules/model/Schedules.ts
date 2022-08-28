import { v4 as uuidv4 } from 'uuid';
import { IIntervals } from '../repositories/ISchedulesRepository';

class Schedule {
  id: string;
  type: string;
  day: string;
  intervals: IIntervals[];
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Schedule };
