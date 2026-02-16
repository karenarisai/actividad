import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country-service';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  countryService= inject(CountryService);

}
