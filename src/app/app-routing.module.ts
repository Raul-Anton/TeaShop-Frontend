import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductFormComponent } from './forms/create-product-form/create-product-form.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { MyOrdersPageComponent } from './my-orders-page/my-orders-page.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';


const routes: Routes = [
  { path:'', component: HomePageComponent},
  { path:'shop', component: ShopPageComponent},
  { path:'create-product', component: CreateProductFormComponent},
  { path:'order', component: OrderPageComponent},
  { path:'my-orders', component: MyOrdersPageComponent},
  { path:'login', component: LoginFormComponent},
  { path:'register', component: RegisterFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
