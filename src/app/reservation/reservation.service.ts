import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations: Reservation[] = [];
  private url = 'http://localhost:3001/reservation';

  constructor(private http: HttpClient) { }




 

  //CRUD
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}/all`);
  }
  getReservationById(id: string) :Observable<Reservation> {
    return this.http.get<Reservation>(`${this.url}/${id}`);
  }
  addReservation(reservation: Reservation): Observable<void> {
    reservation.id = Date.now().toString();
    return this.http.post<void>(`${this.url}/new`,reservation);
  }
  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }
  updateReservation(reservation: Reservation) :Observable<void> { 
    return this.http.put<void>(`${this.url}/add`,reservation);
  }


}
