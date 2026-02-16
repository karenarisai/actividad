import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  title = signal('Country Service');
  
}
