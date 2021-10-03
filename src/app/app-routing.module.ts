import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/marketplace/all',
    pathMatch:'full'
  },
  {
    path:'marketplace',
    loadChildren: () => import('./marketplace/marketplace.module').then(m => m.MarketplaceModule)
  },
  {
    path:'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
