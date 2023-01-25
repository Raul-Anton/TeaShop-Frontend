import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

  productGet!: Observable<Product[]>;
  static productOrders: Product[] = [];
  static totalPrice: number = 0;

  constructor(private productService: ProductService) {
   }

  ngOnInit(): void {
    this.productGet = this.productService.getProducts();
  }

  deleteProduct(id: string): void {   
    this.productService.deleteProduct(id).subscribe((response) => {
      this.ngOnInit();
    })
  }

  buyProduct(product: Product) : void {

    ShopPageComponent.productOrders[ShopPageComponent.productOrders.length] = product;
    ShopPageComponent.totalPrice = ShopPageComponent.totalPrice + product.price;
    ShopPageComponent.productOrders[ShopPageComponent.productOrders.length - 1].uniqueNumber = Math.floor(Math.random()*1000);

    this.ngOnInit();


  }
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: Image;
  uniqueNumber: number;
}

interface Image
{
  id: string;
  azurePath: string;
}
