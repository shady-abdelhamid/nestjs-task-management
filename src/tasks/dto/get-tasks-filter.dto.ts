import { TaskStatus } from '../task.modal';

export class GetTasksFilterDto {
    status: TaskStatus;
    search: string;
}
