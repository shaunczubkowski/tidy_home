export namespace Room {
  export interface RoomDetails {
    name: string,
    displayName: string,
    daily: Task[],
    weekly: Task[],
    monthly: Task[]
  }

  export interface Task {
    id: number,
    task: string,
    completed: boolean
  }
}

