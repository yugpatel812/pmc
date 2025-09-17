import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { Product as ProductService } from '../../services/product';
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm {
  form: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.form = this.fb.group({
      sku: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      colour: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      type: ['']
    });
  }


  submit() {
    if (this.form.invalid) return;
    const newproduct: Product = this.form.value as Product;
    this.productService.add(newproduct);
    // reset & keep price 0 default
    this.form.reset({ price: 0 });
  }
}
