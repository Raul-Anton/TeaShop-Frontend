import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderService } from '../services/order-service';
import { ProductOrderService } from '../services/productorder-service';
import { ShopPageComponent } from '../shop-page/shop-page.component';
import { AppComponent } from '../app.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  productOrders = ShopPageComponent.productOrders;
  displayedColumns: string[] = ['quantity', 'name', 'price', 'actions'];

  totalPrice: number = ShopPageComponent.totalPrice;

  userId: string = 'DFC9C866-9814-4AA8-5923-08DAFFA63AC5';
  updateOrderToPlaced: Number = 3;

  constructor(private orderService: OrderService, private productOrderService: ProductOrderService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  deleteProductOrder(product: Product): void {

    this.productOrders = this.productOrders.filter((data) => data.uniqueNumber != product.uniqueNumber);
    ShopPageComponent.productOrders = ShopPageComponent.productOrders.filter((data) => data.uniqueNumber != product.uniqueNumber);
    
    this.totalPrice = this.totalPrice - product.price;
    ShopPageComponent.totalPrice = this.totalPrice;

    this.snackbar.open('Product removed from the cart!', '',{duration: 1000 ,horizontalPosition: 'end', verticalPosition: 'bottom'} );

    AppComponent.badgeNumber --;
  }

  deleteProductOrderWithoutSnackBar(product: Product): void {

    this.productOrders = this.productOrders.filter((data) => data.uniqueNumber != product.uniqueNumber);
    ShopPageComponent.productOrders = ShopPageComponent.productOrders.filter((data) => data.uniqueNumber != product.uniqueNumber);
    
    this.totalPrice = this.totalPrice - product.price;
    ShopPageComponent.totalPrice = this.totalPrice;

    AppComponent.badgeNumber --;
  }

  createOrder(): void {
    this.orderService.createOrder(this.userId).subscribe(result => { this.createProductOrders() });
    this.snackbar.open('Order Placed!', '',{duration: 1000 ,horizontalPosition: 'end', verticalPosition: 'bottom'} );
  }

  createProductOrders(): void {
    this.orderService.getOrderCurrentUser(this.userId).subscribe(a => {
      this.productOrders.forEach(element => {
        this.productOrderService.createProductOrder(element.id, a.id).subscribe();
      })

      this.updateOrder(a.id);
    }
    );
  }

  updateOrder(currentOrder: string): void {
    this.orderService.updateOrder(currentOrder, this.userId, this.updateOrderToPlaced).subscribe((result) => this.resetValuesOnOrderPlaced());
  }

  resetValuesOnOrderPlaced(): void {
    this.productOrders.forEach(product => {
      this.deleteProductOrderWithoutSnackBar(product);
    });
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