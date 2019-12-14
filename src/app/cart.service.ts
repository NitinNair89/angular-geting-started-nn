import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Array (product cart) to hold the products
  items = [];

  // Method to add produt to items array (cart)
  addToCart(product) {
    this.items.push(product);
  }

  // Method to get products from the cart
  getItems() {
    return this.items;
  }

  // Method to clear the cart
  clearItems() {
    this.items = [];
    this.getItems();
  }

}