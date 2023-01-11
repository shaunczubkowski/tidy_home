import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomSummaryCardComponent } from './room-summary-card.component';

describe('RoomSummaryCardComponent', () => {
  let component: RoomSummaryCardComponent;
  let fixture: ComponentFixture<RoomSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomSummaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
