import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room.model';
import { RoomsService } from '../services/rooms.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public roomSummaries$: Observable<Room.Summary[]> | undefined;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.roomSummaries$ = this.roomsService.getRoomSummaries();
  }

}
