import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.modal';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksServise: TasksService) { }

    @Get()
    getAllTasks(): Task[] {
        return this.tasksServise.getAllTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksServise.getTaskById(id);
    }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksServise.createTask(createTaskDto);
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string) {
        this.tasksServise.deleteTask(id);
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id') id: string,
        @Body('status') status: TaskStatus): Task {
        return this.tasksServise.updateTaskStatus(id, status);
    }
}
