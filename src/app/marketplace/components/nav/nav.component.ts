import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  cart = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.myCart$.subscribe((cartProducts: ProductI[]) => {
      this.cart = cartProducts.length;
    });
    // this.cart = this.productService.cart.length;
  }
}
