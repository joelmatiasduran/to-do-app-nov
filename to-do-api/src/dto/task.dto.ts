import { TaskStatus } from "../entity/task.entity";

export class TaskDTO {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}