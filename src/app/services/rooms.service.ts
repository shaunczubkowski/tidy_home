import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room.RoomDetails[]> {
    return this.http.get<Room.RoomDetails[]>('/assets/data/cleaning-checklist.json')
      // .pipe(
      //   map((data) => {
      //     const { rooms } = data;
      //     const roomDetails = [] as Room.RoomDetails[];
      //     rooms.map((room: Room.RoomDetails | any) => {
      //       const roomName = [Object.keys(room)[0]][0];
      //       roomDetails.push({
      //         displayName: room[roomName].displayName

      //       })
      //     });
      //     return roomDetails;
      //   }));
  }
}
