import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  nuevo:Personaje = {
    nombre: 'Maestro roshi',
    poder: 1000
  }

  ngOnInit(): void {
  }

  constructor() { 
  }
}
