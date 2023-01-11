import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Room } from 'src/app/models/room.model';

@Component({
  selector: 'app-room-summary-card',
  templateUrl: './room-summary-card.component.html',
  styleUrls: ['./room-summary-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomSummaryCardComponent implements OnInit {
  @Input() room: Room.Summary | undefined;

  public progress: number | undefined;
  public icon: string = 'fa-thin fa-ballot-check';

  constructor() { }

  ngOnInit(): void {
    this.progress = 1;
  }

}
