import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // Property to hold shipping data
  shippingCosts;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Get the shipping data using CartService
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}