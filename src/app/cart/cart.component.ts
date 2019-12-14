import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Property to hold cart items
  items;

  // Property to hold form data
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    // Populate the cart with added products
    this.items = this.cartService.getItems();

    // Set the form model
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
  }

  // Method to submit form and clear cart
  onSubmit(customerData) {
    console.warn(customerData);

    this.cartService.clearItems();
    this.checkoutForm.reset();
  }
}