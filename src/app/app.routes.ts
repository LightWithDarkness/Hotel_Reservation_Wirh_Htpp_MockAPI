import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "new", component:ReservationFormComponent }, 
    // {path:"all-reservations",loadChildren:()=>import('./reservation/reservation.module').then(m=>m.ReservationModule)}, //lazy loading
    {path:"all",component:ReservationListComponent},
    {path:"edit/:id",component:ReservationFormComponent}
];
