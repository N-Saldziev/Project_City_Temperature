import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// import {countries,cities} from '../app/Model/places';
// import {countriesAPI,citiesAPI} from '../app/Model/Api';
import cities from './app/places.json';

interface PLACE{
  name: string;
  country: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    HttpClientModule,
    // cities,
    // countries,
    // citiesAPI,
    // countriesAPI
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project_City_Temperature';

  Users: PLACE[] = cities;
  constructor(){
    console.log(this.Users);
  }
}
