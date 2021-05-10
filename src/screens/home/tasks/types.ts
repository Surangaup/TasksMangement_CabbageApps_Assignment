
export interface Task {
    id:number,
    title: string,
    description?: string,
    fromTime: string,
    toTime: string,
    date: string,
    isCompleted: boolean,
    taskType: string // Important / Planned
    onCheckChange?: any
}

export interface TasksProps{
    tasks: Task[],
    onCheckChange: any
}