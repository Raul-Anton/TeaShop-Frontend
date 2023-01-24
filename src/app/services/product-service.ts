import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    constructor(private httpClient: HttpClient){}

    getProducts(): Observable<any> {
        return this.httpClient.get('https://localhost:7093/api/Product');
    }

    uploadFile(file: any): Observable<any> {
        return this.httpClient.post('https://localhost:7093/api/Product/image', {file});
    }

    createProduct(name: string, description: string, price: string, quantity: string): Observable<any> {
        return this.httpClient.post('https://localhost:7093/api/Product', {name, description, price:parseFloat(price), quantity:parseInt(quantity)});
    }

    deleteProduct(id: string): Observable<any> {
        return this.httpClient.delete('https://localhost:7093/api/Product/' + id);
    }

}