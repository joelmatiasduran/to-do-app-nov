import { Repository } from 'typeorm';
import { Task } from '../entity/task.entity';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { TaskDTO } from '../dto/task.dto';
import { UpdateTaskDTO } from '../dto/update-task.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    getOne(taskId: number): Promise<TaskDTO>;
    createOne(createTaskRequest: CreateTaskDTO): Promise<TaskDTO>;
    private entityToDTO;
    getAll(): Promise<TaskDTO[]>;
    updateOne(taskId: number, updateTaskRequest: UpdateTaskDTO): Promise<TaskDTO>;
    deleteOne(taskId: number): Promise<void>;
}
