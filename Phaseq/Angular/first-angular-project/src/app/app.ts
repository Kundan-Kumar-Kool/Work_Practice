import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product';
import { UserComponent } from './components/user/user';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ProductComponent,UserComponent],
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

}
