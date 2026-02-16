import { Component, signal } from '@angular/core';
import { CountryCard } from '../../components/country-card/country-card';
import { Controles } from "../../controles/controles";
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-home-page',
  imports: [CountryCard, Controles],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

  
public countries = signal<Country[]>([
      { 
        name: 'Afghanistan', 
        capital: 'Kabul', 
        region: 'Asia', 
        population: 40218234, 
        flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg' 
      },
      { 
        name: 'Albania', 
        capital: 'Tirana', 
        region: 'Europe', 
        population: 2837743, 
        flag: 'https://flagcdn.com/al.svg' 
      },
      { 
        name: 'Argentina', 
        capital: 'Buenos Aires', 
        region: 'Americas', 
        population: 45810000, 
        flag: 'https://flagcdn.com/ar.svg' 
      },
      { 
        name: 'Australia', 
        capital: 'Canberra', 
        region: 'Oceania', 
        population: 26010000, 
        flag: 'https://flagcdn.com/au.svg' 
      },
      { 
        name: 'Brazil', 
        capital: 'Brasília', 
        region: 'Americas', 
        population: 216400000, 
        flag: 'https://flagcdn.com/br.svg' 
      },
      { 
        name: 'Mexico', 
        capital: 'Mexico City', 
        region: 'Americas', 
        population: 126000000, 
        flag: 'https://flagcdn.com/mx.svg' 
      },
      { 
        name: 'Nigeria', 
        capital: 'Abuja', 
        region: 'Africa', 
        population: 227000000, 
        flag: 'https://flagcdn.com/ng.svg' }, 
      { 
        name: 'South Africa', 
        capital: 'Pretoria', 
        region: 'Africa', 
        population: 60400000, 
        flag: 'https://flagcdn.com/za.svg' }, 
      { name: 'Spain', 
        capital: 'Madrid', 
        region: 'Europe', 
        population: 48300000, 
        flag: 'https://flagcdn.com/es.svg' 
      }, 
      { 
        name: 'United Kingdom', 
        capital: 'London', 
        region: 'Europe', 
        population: 67700000, 
        flag: 'https://flagcdn.com/gb.svg' 
      }, 
      
  ]);

  orderByname(): void {
    this.countries.update(countries => [...countries].sort((a, b) => a.name.localeCompare(b.name)));
  }

  orderByPopulation(): void {
    this.countries.update(countries => [...countries].sort((a, b) => b.population - a.population));
  }

}
