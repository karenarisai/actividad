import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-controles',
  imports: [],
  templateUrl: './controles.html',
  styleUrl: './controles.css',
})
export class Controles {
  sortByName = output<void>();
  sortByPopu = output<void>();
}
