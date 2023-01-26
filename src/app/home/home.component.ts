import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { RoomsService } from '../services/rooms.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public roomList$: Observable<Room.RoomDetails[]> = from([]);

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomList$ = this.roomsService.getRooms();
  }

}
