import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService{

    private _personajes:Personaje[]=[
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 5500
        }
      ]

    get personajes():Personaje[] {
        return [...this._personajes];
    }  

    constructor(){
        console.log('servicio inicializado');
    }

    agregarPersonajes(personaje:Personaje){
        this._personajes.push(personaje);
    }
}