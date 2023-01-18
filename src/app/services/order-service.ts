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
}