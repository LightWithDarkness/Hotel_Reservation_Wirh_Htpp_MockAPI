import { Component, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation/reservation.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from "../home/home.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-reservation-list',
  imports: [CommonModule, RouterModule, HomeComponent,],
  templateUrl: './reservation-list.component.html',
  styleUrl: './reservation-list.component.css'
})
export class ReservationListComponent implements OnInit, OnDestroy {

  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) { }
  
  ngOnInit() {
    this.reservationService.getAllReservations().subscribe( reservation=> this.reservations = reservation);
  }
  ngOnDestroy(): void { }

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id).subscribe(()=> console.log('Deletion operation successfull'));
    
  }
}
