import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { TaskService } from './task.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    getAll(): Promise<import("../dto/task.dto").TaskDTO[]>;
    getOnce(taskId: number): Promise<import("../dto/task.dto").TaskDTO>;
    createOne(createTaskRequest: CreateTaskDTO): Promise<import("../dto/task.dto").TaskDTO>;
    updateOne(taskId: number, updateTaskRequest: UpdateTaskDTO): Promise<import("../dto/task.dto").TaskDTO>;
    deleteOne(taskId: number): Promise<void>;
}
