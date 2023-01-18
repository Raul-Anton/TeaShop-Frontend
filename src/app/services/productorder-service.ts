import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductOrderService {

    constructor(private httpClient: HttpClient){}

    createProductOrder(productId: string, orderId: string): Observable<any> {
        return this.httpClient.post('https://localhost:7093/api/ProductOrder', {productId, orderId});
    }
}