// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeComponent } from './home.component';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule,
//     HomeComponent,
//     BrowserModule,
//     RouterModule,
//   ],
// })
// export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'; // Import it

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeComponent // ✅ Import it instead of declaring it
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }

