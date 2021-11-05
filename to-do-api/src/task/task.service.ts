import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from '../entity/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDTO } from '../dto/create-task.dto';
import { TaskDTO } from '../dto/task.dto';
import { UpdateTaskDTO } from '../dto/update-task.dto';

@Injectable()
export class TaskService {
    
    constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}
    
    public async getOne(taskId: number) {
        const task: Task = await this.taskRepository.findOne(taskId);

        if(!task) throw new NotFoundException(`Task with the id ${taskId} was not found`);

        const taskDTO: TaskDTO = this.entityToDTO(task);

        return taskDTO;
    }

    public async createOne(createTaskRequest: CreateTaskDTO) {
        const task: Task = new Task();
        task.title = createTaskRequest.title;
        task.description = createTaskRequest.description;
        task.status = TaskStatus.Created;

        await this.taskRepository.save(task);

        const taskDTO = this.entityToDTO(task);

        return taskDTO;
    }

    private entityToDTO(task: Task): TaskDTO {
        const taskDTO = new TaskDTO();
        taskDTO.id = task.id;
        taskDTO.title = task.title;
        taskDTO.description = task.description;
        taskDTO.status = task.status;

        return taskDTO;
    }

    public async getAll() {
        const tasks: Task[] = await this.taskRepository.find();
        const tasksDTO: TaskDTO[] = tasks.map(x => this.entityToDTO(x));

        return tasksDTO;
    }

    public async updateOne(taskId: number, updateTaskRequest: UpdateTaskDTO) {
       // fetch and check if the task exists
        const task: Task = await this.getOne(taskId);

       // check which properties are set in the dto
        task.title = updateTaskRequest.title || task.title;
        task.description = updateTaskRequest.description || task.description;
        task.status = updateTaskRequest.status === undefined ? task.status : updateTaskRequest.status;

       // update the properties on the task
        await this.taskRepository.save(task);

       // return the task as a dto
       const taskDTO: TaskDTO = this.entityToDTO(task);

       return taskDTO;
    }

    public async deleteOne(taskId: number) {
        // fetch and check if the task exists
        const task: Task = await this.getOne(taskId);

        // delete the task
        await this.taskRepository.remove(task);
    }
   
}
