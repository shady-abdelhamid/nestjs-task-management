import { PipeTransform, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task.modal";

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE,
    ];

    transform(value: any) {
        value = value.toUpperCase();
        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`"${value}" is invalid status`);
        }
        return value;
    }

    private isStatusValid(status: any): boolean {
        return this.allowedStatuses.indexOf(status) !== -1;
    }
}