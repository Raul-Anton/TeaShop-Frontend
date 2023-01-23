import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OrderService {

    constructor(private httpClient: HttpClient){}

    createOrder(userId: string): Observable<any> {
        return this.httpClient.post('https://localhost:7093/api/Order', {userId});
    }

    getOrderCurrentUser(userId: string): Observable<any> {
        return this.httpClient.get('https://localhost:7093/api/Order/Current-User/' + userId);
    }

    updateOrder(currentOrder: string, userId: string, orderStatus: Number): Observable<any> {
        return this.httpClient.put('https://localhost:7093/api/Order/' + currentOrder, {userId, orderStatus});
    }
}