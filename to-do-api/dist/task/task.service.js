"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("../entity/task.entity");
const typeorm_2 = require("@nestjs/typeorm");
const task_dto_1 = require("../dto/task.dto");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async getOne(taskId) {
        const task = await this.taskRepository.findOne(taskId);
        if (!task)
            throw new common_1.NotFoundException(`Task with the id ${taskId} was not found`);
        const taskDTO = this.entityToDTO(task);
        return taskDTO;
    }
    async createOne(createTaskRequest) {
        const task = new task_entity_1.Task();
        task.title = createTaskRequest.title;
        task.description = createTaskRequest.description;
        task.status = task_entity_1.TaskStatus.Created;
        await this.taskRepository.save(task);
        const taskDTO = this.entityToDTO(task);
        return taskDTO;
    }
    entityToDTO(task) {
        const taskDTO = new task_dto_1.TaskDTO();
        taskDTO.id = task.id;
        taskDTO.title = task.title;
        taskDTO.description = task.description;
        taskDTO.status = task.status;
        return taskDTO;
    }
    async getAll() {
        const tasks = await this.taskRepository.find();
        const tasksDTO = tasks.map(x => this.entityToDTO(x));
        return tasksDTO;
    }
    async updateOne(taskId, updateTaskRequest) {
        const task = await this.getOne(taskId);
        task.title = updateTaskRequest.title || task.title;
        task.description = updateTaskRequest.description || task.description;
        task.status = updateTaskRequest.status === undefined ? task.status : updateTaskRequest.status;
        await this.taskRepository.save(task);
        const taskDTO = this.entityToDTO(task);
        return taskDTO;
    }
    async deleteOne(taskId) {
        const task = await this.getOne(taskId);
        await this.taskRepository.remove(task);
    }
};
TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map