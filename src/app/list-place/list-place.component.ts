import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestService } from '../rest.service';
import { citie } from '../Model/places';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-place',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-place.component.html',
  styleUrl: './list-place.component.css'
})
export class ListPlaceComponent implements OnInit, OnDestroy {

  cities: citie[] = [];

  citieSubscription$?: Subscription;

  constructor(private restService: RestService){}

  ngOnInit(): void{
    this.citieSubscription$ = this.restService.getCitie().subscribe({
      next: citie => this.cities = citie,
      error: err => console.log(err)
    });
  }

  ngOnDestroy(): void {
      this.citieSubscription$?.unsubscribe();
  }

  deleteCitie(_t14: citie){
    throw new Error(`Mthod is not implemeted.`);
  }
  viewCitie(_t14: citie){
    throw new Error(`Mthod is not implemeted.`);
  }
  editCitie(_t14: citie){
    throw new Error(`Mthod is not implemeted.`);
  }
}
