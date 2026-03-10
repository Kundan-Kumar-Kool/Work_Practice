import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './components/product/product';
import { Product } from './models/product';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductComponent,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('second-angular-project');
 
  // product1 !:Product
  // product2 !:Product

  products !: Product[];
  
  ngOnInit():void{
    // this.product1= new Product(1,"Dell Monitor",10000,"",true,"",100);
    // this.product1= new Product(2,"Sony Monitor",20000,"",true,"",200);

    this.products=[];
    this.products.push(new Product(1,"Dell Monitor",10000,"",true,"",100));
    this.products.push(new Product(2,"Sony Monitor",20000,"",true,"",200));

  }

}
