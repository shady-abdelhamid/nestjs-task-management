import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';

const mockUser = { id: 12, username: 'Test user' };

const mockTaskRepository = () => ({
    getTasks: jest.fn(),
    findOne: jest.fn(),
    createTask: jest.fn(),
    delete: jest.fn(),
});

describe('TasksService', () => {
    let tasksService;
    let taskRepository;


    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [
                TasksService,
                { provide: TaskRepository, useFactory: mockTaskRepository }
            ],
        }).compile();

        tasksService = await module.get<TasksService>(TasksService);
        taskRepository = await module.get<TaskRepository>(TaskRepository);
    });

    describe('getTasks', () => {
        it('should get all tasks from the repository', async () => {
            taskRepository.getTasks.mockResolvedValue('someValue');

            expect(taskRepository.createTask).not.toHaveBeenCalled();
            const filters: GetTasksFilterDto = { status: TaskStatus.IN_PROGRESS, search: 'some search query' };
            const result = await tasksService.getTasks(filters, mockUser);
            expect(taskRepository.getTasks).toHaveBeenCalled();
            expect(result).toEqual('someValue');
        });
    });
});