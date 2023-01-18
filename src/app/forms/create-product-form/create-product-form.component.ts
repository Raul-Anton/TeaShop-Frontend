import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product-service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrls: ['./create-product-form.component.css']
})
export class CreateProductFormComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private productService: ProductService) { }

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

  ngOnSubmit()
  {
    this.productService.createProduct(this.productForm.value.name!, this.productForm.value.description!, this.productForm.value.price!, this.productForm.value.quantity!).subscribe();
  }
}
