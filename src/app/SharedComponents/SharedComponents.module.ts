import {  CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomSummaryCardComponent } from './room-summary-card/room-summary-card.component';

@NgModule({
  declarations: [
    RoomSummaryCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RoomSummaryCardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA]
})
export class SharedComponentsModule { }
