import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

interface User {
  name: string;
  age: number;
}
@Component({
  selector: 'product',
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  @Input("name") name!: string;
  @Input("price") price!:number;
  // here using this input data is passed from parent to child
  // here parent is app component and it is passed here.

   @Output() event1 !: EventEmitter<string>;
   // here u are passing data or info from child to parent using event emitter here.
   // and here eventemitter is used here.
   messageToParent():void{
    this.event1.emit("Hi Parent");
   }

  User1: User = {
    name: 'Good',
    age: 23,
  };
}
