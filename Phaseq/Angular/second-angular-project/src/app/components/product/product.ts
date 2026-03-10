import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {
 @Input("product") product !: Product;
  constructor(){
    // this.product=new Product(1,"Dell Keyboard",1000,"",true,"",100)
    // this.product=new Product(2,"Sony TV",2000,"",false,"",200)
  }
  ngOnInit():void{

  }
}
