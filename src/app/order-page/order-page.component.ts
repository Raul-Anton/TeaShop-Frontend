import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order-service';
import { ProductOrderService } from '../services/productorder-service';
import { ShopPageComponent } from '../shop-page/shop-page.component'; { }

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {

  productOrders = ShopPageComponent.productOrders;
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'quantity'/*,'imageId','imageAzurePath'*/,'actions'];

  userId: string = 'a6810450-05d4-4271-c89e-08daf96acaac';

  constructor(private orderService: OrderService, private productOrderService: ProductOrderService){ }

  ngOnInit(): void {
  }

  deleteProductOrder(id: string): void {
    this.productOrders = this.productOrders.filter((data) => data.id != id);
    ShopPageComponent.productOrders = ShopPageComponent.productOrders.filter((data) => data.id != id);
  }

  createOrder(): void {
    console.log('i arrived');
    this.orderService.createOrder(this.userId).subscribe();
  }

  createProductOrders(): void {
    this.productOrders.forEach(element => {
      this.productOrderService.createProductOrder()
    });
  }

}
