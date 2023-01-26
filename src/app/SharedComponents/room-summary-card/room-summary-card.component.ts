import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-summary-card',
  templateUrl: './room-summary-card.component.html',
  styleUrls: ['./room-summary-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomSummaryCardComponent implements OnInit {
  @Input() room: Room.RoomDetails | undefined;

  public progress: number | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.progress = 1;
  }

  navigateToRoom(args: any): void {
    // this.router.navigate(['/room'], {queryParams: { room: ar }})
  }

}
