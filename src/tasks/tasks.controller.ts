import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.modal';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServise: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksServise.getAllTasks();
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {

        return this.tasksServise.createTask(createTaskDto);
    }
}
