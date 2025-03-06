import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() {
    let savedRservations = localStorage.getItem('reservations');
    this.reservations = savedRservations? JSON.parse(savedRservations): [];
   }

  private reservations: Reservation[] = [];
  private saveReservations(): void {
    localStorage.setItem('reservations', JSON.stringify(this.reservations))
  }

  //CRUD
  getAllReservations(): Reservation[] {
    return this.reservations;
  }
  getReservationById(id: string) {
    return this.reservations.find(rsv => rsv.id === id)
  }
  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    this.saveReservations();

  }
  deleteReservation(id: string) {
    this.reservations = this.reservations.filter(rsv => rsv.id !== id);
    this.saveReservations();
  }
  updateReservation(reservation: Reservation) {
    this.reservations = this.reservations.map(rsv => rsv.id === reservation.id ? reservation : rsv)
    this.saveReservations();
  }


}
