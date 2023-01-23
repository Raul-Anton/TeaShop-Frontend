import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private httpClient: HttpClient){
    }

    createUser(name: string, email: string, password: string, city: string, street: string, number: string): Observable<any> {
        console.log('I arrived');
        return this.httpClient.post('https://localhost:7093/api/User', {name, email, password, address:{city, street, number:parseInt(number)}});
    }
}