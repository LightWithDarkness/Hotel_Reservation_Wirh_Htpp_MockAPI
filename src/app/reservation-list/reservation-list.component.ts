import { Component } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterModule, HomeComponent],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent {

    reservations: Reservation[] = [];
    constructor(private reservationService: ReservationService) {}

    ngOnInit() {
      this.reservations = this.reservationService.getAllReservations();
    }

    deleteReservation(id:string){
      this.reservationService.deleteReservation(id);
      this.reservations = this.reservationService.getAllReservations();
    }
}
