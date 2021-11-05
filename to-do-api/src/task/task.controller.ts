import { Body, Controller, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateTaskDTO } from 'src/dto/create-task.dto';
import { UpdateTaskDTO } from 'src/dto/update-task.dto';
import { TaskStatus } from '../entity/task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}
    

    @Get()
    public async getAll(){
        const resp = await this.taskService.getAll();

        return resp;
    }

    @Get("/:id")// tasks id
    public async getOnce(@Param("id") taskId: number) {
        const resp =await this.taskService.getOne(taskId);
        
        return resp;
    }

    @Post()
    public async createOne(@Body() createTaskRequest: CreateTaskDTO) {
        const resp = await this.taskService.createOne(createTaskRequest);

        return resp;
    }

    @Put("/:id")
    public async updateOne(@Param("id") taskId: number, @Body() updateTaskRequest: UpdateTaskDTO){
        const resp = await this.taskService.updateOne(taskId, updateTaskRequest);

        return resp;
    }
    
    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    public async deleteOne(@Param("id") taskId: number) {
        await this.taskService.deleteOne(taskId);
    }
}
