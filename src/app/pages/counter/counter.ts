import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
   counter = 10;

   decreaseBy(){
    this.counter = this.counter - 1
   }

   increaseBy(){
    this.counter = this.counter + 1
   }

   resetCounter(){
    this.counter = 0
   }
}
