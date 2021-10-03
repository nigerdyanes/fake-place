import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'all',
        component: HomeComponent
      },
      {
        path:'category/:idCategory',
        component: CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketplaceRoutingModule { }
