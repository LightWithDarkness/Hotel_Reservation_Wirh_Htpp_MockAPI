import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationFormComponent } from '../reservation-form/reservation-form.component';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReservationFormComponent,
    ReservationListComponent,
    FormsModule,
    ReactiveFormsModule,
    // HomeModule
  ]
})
export class ReservationModule { }
