import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductI } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: ProductI[] = [
  {
    "id": 1,
    "name": "Chicken - White Meat, No Tender",
    "price": 561.88
  }, {
    "id": 2,
    "name": "Cake - Mini Potato Pancake",
    "price": 831.52
  }, {
    "id": 3,
    "name": "Bread Base - Italian",
    "price": 326.68
  }, {
    "id": 4,
    "name": "Nut - Hazelnut, Ground, Natural",
    "price": 497.59
  }, {
    "id": 5,
    "name": "Soup - Knorr, Classic Can. Chili",
    "price": 281.61
  }, {
    "id": 6,
    "name": "Beer - Moosehead",
    "price": 979.58
  }, {
    "id": 7,
    "name": "Graham Cracker Mix",
    "price": 599.65
  }, {
    "id": 8,
    "name": "Plate Pie Foil",
    "price": 837.92
  }, {
    "id": 9,
    "name": "Sauce - Alfredo",
    "price": 881.82
  }, {
    "id": 10,
    "name": "Cheese - Bocconcini",
    "price": 877.39
  }];
  private myShoppingCart: ProductI[]=[];
  private myCart = new BehaviorSubject<ProductI[]>([]);
  myCart$ = this.myCart.asObservable();

  getAll(): ProductI[]{
    return this.products;
  }

  addToCart(productId:number){
    const product = this.products.find(product => product.id === productId) as ProductI;
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

}
