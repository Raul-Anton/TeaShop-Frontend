import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductFormComponent } from './forms/create-product-form/create-product-form.component';

import { ShopPageComponent } from './shop-page/shop-page.component';

const routes: Routes = [
  { path:'shop', component: ShopPageComponent},
  { path:'create-product', component: CreateProductFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
