import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    LayoutComponent,
    NavComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ]
})
export class MarketplaceModule { }
