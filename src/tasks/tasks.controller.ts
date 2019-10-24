import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.modal';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServise: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksServise.getAllTasks();
    }

    @Post()
    createTask(
        @Body('title') title,
        @Body('description') description,
    ): Task {

        return this.tasksServise.createTask(title, description);
    }
}
