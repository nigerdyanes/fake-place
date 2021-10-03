import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { ProductI } from "src/app/models/product.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() productAdded : EventEmitter<number> = new EventEmitter()
  @Input() products: ProductI[] = [];

  constructor() { }


  ngOnInit(): void {
  }

  addToCart(productId:number){
    this.productAdded.emit(productId);
    console.log('agrego el producto a carro', productId);
  }

}
