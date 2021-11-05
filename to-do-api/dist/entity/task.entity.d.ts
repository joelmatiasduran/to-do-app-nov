export declare enum TaskStatus {
    Created = 0,
    InProgress = 1,
    Done = 2
}
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}
