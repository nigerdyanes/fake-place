import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { ProductI } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private productService:ProductService
  ) { }

  products: ProductI[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts():void{
    this.products = this.productService.getAll();
  }

  addToCart(productId:number):void{
    this.productService.addToCart(productId);
  }

}
