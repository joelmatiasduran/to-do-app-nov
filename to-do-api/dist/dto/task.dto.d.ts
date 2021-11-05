import { TaskStatus } from "../entity/task.entity";
export declare class TaskDTO {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
