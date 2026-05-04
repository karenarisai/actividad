import { Injectable, signal } from '@angular/core';
import { Country } from '../interfaces/country.interface';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private http = inject(HttpClient);
  //private authService = inject(AuthService);

  title = signal('Country Service');

  private _countries = signal<Country[]>([
   
  ]);

  
  
  public countries = this._countries.asReadonly();

  constructor() {
    this.fetchCountries();
  }

  fetchCountries(): void {
    this.http.get<Country[]>("http://localhost:8081/api/countries").subscribe({
      next:(response:Country[])=>{
        this._countries.set(response);
    },
      error:(error:any)=>{
        console.log(error);
        //this.authService.logout();

      }
    })
  }

  addCountry(country: Country): void {
    this._countries.update((countries) => [...countries, country]);
  }

  orderByName(): void {
    this._countries.update((countries) =>
      [...countries].sort((a, b) => a.name.localeCompare(b.name))
    );
  }

  orderByPopulation(): void {
    this._countries.update((countries) =>
      [...countries].sort((a, b) => b.population - a.population)
    );
  }
 
  
}
