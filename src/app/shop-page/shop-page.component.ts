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
  }
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: Float32Array;
  quantity: Int16Array;
  image: Image;
}

interface Image
{
  id: string;
  azurePath: string;
}
