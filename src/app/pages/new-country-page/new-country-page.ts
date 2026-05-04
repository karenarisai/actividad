import { Component, signal, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-new-country-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './new-country-page.html',
  styleUrl: './new-country-page.css',
})
export class NewCountryPage {
  
  regions: Country['region'][]=[
    'Americas',
    'Europe',
    'Asia',
    'Africa',
    'Oceania'
  ];

  form: FormGroup = new FormGroup({
    name: new FormControl( '', [Validators.required]),
    capital:new FormControl('', [Validators.required]),
    region:new FormControl( 'Americas', [Validators.required]),
    population:new FormControl('', [Validators.required]),
    flag:new FormControl('', [Validators.required]),
  });


 submit(): void {
    console.log('Formulario activado');
    //estructuracion de objetos
    const {name, capital, region, population, flag} = this.form.value;

    if (this.form.valid) {
      console.log('Formulario válido:');

      const newCountry: Country = {
        name: name!,
        capital: capital!,
        region: region!,
        population: Number(population),
        flag: flag!,
      };

      console.log('agregando nuevo elemento', newCountry);

      // insertar el nuevo país en el servicio compartido
      this.countryService.addCountry(newCountry);

      // opcional: resetear el formulario
      this.form.reset({ region: 'Americas' });
    }


  }

  constructor(private countryService: CountryService) {}

}
