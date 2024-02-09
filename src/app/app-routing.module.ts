import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListPlaceComponent } from './list-place/list-place.component';

const routes: Route = [
  {path: "places", Component: ListPlaceComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
