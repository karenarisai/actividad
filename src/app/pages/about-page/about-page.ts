import { Component } from '@angular/core';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {

  constructor(private countryService: CountryService) {
    this.countryService.title();
   }
}
