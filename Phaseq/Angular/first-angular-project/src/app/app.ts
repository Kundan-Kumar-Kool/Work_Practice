import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product';
import { UserComponent } from './components/user/user';
import { AddProductComponent } from './components/add-product/add-product';
import { TemplateDrivenFormDemoComponent } from './components/template-driven-form-demo/template-driven-form-demo';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ProductComponent,UserComponent,AddProductComponent,TemplateDrivenFormDemoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Welcome to the angular Project!!');
  x:string="Hello World You are welcomed here.";
  arr1:Array<string>=["Mango","Apple"];
  arr2:string[]=["Mango","Apple","Banana"];
  student1:{name:string,age:number}={
    name:"Cool Guy",
    age:25
  }
  isGood:Boolean = true;
  add(x:number,y:number):number{
    return x+y;
  }
  sayHi():void{
    console.log("Hi");
  }
  f1(event:any):void{
    console.log("Got an event1 object from child side and it had a message "+event);
  }
  f2(event:any):void{
    console.log(`Got an event object from child product ${event.name} whose price is ${event.price}`);
  }

 // this is for the the product to enter.
 items:string[]=[];
 onItemAdded(item:string):void{
  this.items.push(item);
 }

}
