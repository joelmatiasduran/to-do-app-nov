import { TaskStatus } from "src/entity/task.entity";

export class UpdateTaskDTO {
    title?: string;
    description?: string;
    status?: TaskStatus;
}