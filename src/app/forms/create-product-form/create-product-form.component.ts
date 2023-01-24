import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product-service';
import { DomElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private productService: ProductService, private httpClient: HttpClient) { }

  file: any;

  ngOnInit(): void {
  }

  productForm = this.formBuilder.group(
    {
      name: [''],
      description: [''],
      price: [''],
      quantity: [''],
    }
  )

  onChange(event: any):void {
    this.file = event.target.files[0];
  }

  ngOnSubmit()
  {
    let formData = new FormData();
    formData.set("file",this.file);
    this.httpClient.post('https://localhost:7093/api/Product/image', formData).subscribe(result => {this.productService.createProduct(this.productForm.value.name!, this.productForm.value.description!, this.productForm.value.price!, this.productForm.value.quantity!).subscribe();});
  }
}
