export namespace Room {
  export interface Summary {
    name: string,
    iconClass: string,
  }

  export interface ListOfRooms {
    rooms: Array<RoomDetails>
  }

  export interface RoomDetails {
    displayName: string,
    iconClass: string,
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

