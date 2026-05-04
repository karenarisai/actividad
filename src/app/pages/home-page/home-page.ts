import { Component, inject } from '@angular/core';
import { CountryCard } from '../../components/country-card/country-card';
import { Controles } from "../../controles/controles";
import { CountryService } from '../../services/country-service';
import { OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-home-page',
  imports: [CountryCard, Controles],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

export class HomePage implements OnInit, OnDestroy {
  countryService = inject(CountryService);
  countries = this.countryService.countries;

  orderByname(): void {
    this.countryService.orderByName();
  }

  orderByPopulation(): void {
    this.countryService.orderByPopulation();
  }


  ngOnInit(): void {

    this.countryService.fetchCountries();
  }

  ngOnDestroy(): void {

  }
}
