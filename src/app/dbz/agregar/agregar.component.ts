import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  @Input() nuevo:Personaje = {
    nombre: '',
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor(private dbzService:dbzService) { }

  ngOnInit(): void {
  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){return}
    
    this.dbzService.agregarPersonajes(this.nuevo);

    console.log(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
