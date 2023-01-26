import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderPageComponent } from '../order-page/order-page.component';
import { OrderService } from '../services/order-service';

@Component({
  selector: 'app-my-orders-page',
  templateUrl: './my-orders-page.component.html',
  styleUrls: ['./my-orders-page.component.css']
})
export class MyOrdersPageComponent implements OnInit {

  displayedColumns: string[] = ['OrderId', 'UserId', 'OrderStatus'];
  orders!: Observable<Order[]>;

  userId: string = 'DFC9C866-9814-4AA8-5923-08DAFFA63AC5';

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrdersCurrentUser(this.userId);
  }

}

interface Order
{
  id: string;
  userId: string;
  OrderStatus: number;
}
