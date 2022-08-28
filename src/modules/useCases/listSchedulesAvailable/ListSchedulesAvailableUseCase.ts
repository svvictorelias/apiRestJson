import { convertDate } from "../../../utils/convertDate";
import { Schedule } from "../../model/Schedules";
import { IListSchedulesAvaliable, IScheduleRepository } from "../../repositories/ISchedulesRepository";

interface IRequest{
  start: string,
  end:string
}

class ListSchedulesAvailableUseCase{
  constructor(private schedulesRepository: IScheduleRepository) {}

  execute({start, end}:IRequest): Schedule[]{
    const schedulesAvaliableData: IListSchedulesAvaliable | any = [];
    const schedules = this.schedulesRepository.list()

    schedules.filter(schedule => {
      if (schedule.type === 'onlyOne') {
        if (
          convertDate(schedule.day) >= convertDate(start) &&
          convertDate(schedule.day) <= convertDate(end)
        ) {
          schedulesAvaliableData.push({
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
          schedulesAvaliableData.push({
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
            schedulesAvaliableData.push({
              day: formatedDate,
              intervals: schedule.intervals
            });
          }
          count += 86400000;
        }
      }
    });
    return schedulesAvaliableData
  }
}

export {ListSchedulesAvailableUseCase}