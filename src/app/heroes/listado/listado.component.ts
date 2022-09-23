import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];
  heroreBorrado:string | undefined;

  borrarHeroe(){
    this.heroreBorrado = this.heroes.shift();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
