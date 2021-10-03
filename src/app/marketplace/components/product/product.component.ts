import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductI } from "src/app/models/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Output() productToCart: EventEmitter<number> = new EventEmitter();
  @Input() product: ProductI = {
    id:0,
    name:'',
    price:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(id:number){
    console.log('desde product a products id', id);
    this.productToCart.emit(id);
  }

}
