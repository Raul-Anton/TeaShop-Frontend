import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  displayedColumns: string[] = ['quantity', 'name', 'price', 'actions'];

  userId: string = 'a6810450-05d4-4271-c89e-08daf96acaac';
  updateOrderToPlaced: Number = 3;

  constructor(private orderService: OrderService, private productOrderService: ProductOrderService) { }

  ngOnInit(): void {
  }

  deleteProductOrder(id: string): void {
    this.productOrders = this.productOrders.filter((data) => data.id != id);
    ShopPageComponent.productOrders = ShopPageComponent.productOrders.filter((data) => data.id != id);
  }

  createOrder(): void {
    this.orderService.createOrder(this.userId).subscribe(result => { this.createProductOrders() });
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
    this.orderService.updateOrder(currentOrder, this.userId, this.updateOrderToPlaced).subscribe();
  }

}