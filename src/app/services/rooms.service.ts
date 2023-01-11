import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getRoomSummaries(): Observable<Room.Summary[]> {
    return this.http.get<Room.ListOfRooms>('/assets/data/cleaning-checklist.json')
      .pipe(
        map((data) => {
          const { rooms } = data;
          const roomSummaries = [] as Room.Summary[];
          rooms.map((room: Room.RoomDetails | any) => {
            const roomName = [Object.keys(room)[0]][0];
            roomSummaries.push({
              name: room[roomName].displayName,
              iconClass: room.iconClass
            })
          });
          return roomSummaries;
        }));
  }
}
