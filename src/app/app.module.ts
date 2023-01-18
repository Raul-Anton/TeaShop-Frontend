import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialDesignModule } from './material-design/material-design.module';
import { ShopPageComponent } from './shop-page/shop-page.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateProductFormComponent } from './forms/create-product-form/create-product-form.component';
import { ProductService } from './services/product-service';

@NgModule({
  declarations: [
    AppComponent,
    ShopPageComponent,
    CreateProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
