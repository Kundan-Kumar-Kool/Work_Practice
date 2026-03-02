import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  name: string;
  age: number;
}
@Component({
  selector: 'product',
  imports: [CommonModule,FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
  @Input("name") name!: string;
  @Input("price") price!:number;
  // here using this input data is passed from parent to child
  // here parent is app component and it is passed here.

   @Output() event1 : EventEmitter<string>=new EventEmitter<string>;
   @Output() event2 : EventEmitter<{}>=new EventEmitter<{}>;
   // here u are passing data or info from child to parent using event emitter here.
   // and here eventemitter is used here.
   // there should be a listner in parent too to listen this.
   messageToParent():void{
     console.log("messageToParent is called here by clicking. ")
    this.event1.emit("Hi Parent");
   }
  messageToParent2():void{
    console.log("This is the message from child side and it's second one.");
    this.event2.emit(this);// here this is the object itself here.
  }

  @Output() addItem = new EventEmitter<string>();
  newItem:string ="";
  addNewItem():void{
    if(this.newItem.trim()){
      this.addItem.emit(this.newItem);
      this.newItem="";
    }
  }

  User1: User = {
    name: 'Good',
    age: 23,
  };
}
