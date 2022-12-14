import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //data binding
  title: string = 'la liste de produits';

  listProducts: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listProducts = [
      {
        id: '1',
        title: 'T-shirt 1',
        price: 18,
        quantity: 0,
        like: 0,
        email: 'marwen@gmail.com',
      },
      {
        id: '2',
        title: 'T-shirt 2',
        price: 21,
        quantity: 10,
        like: 0,
        email: 'marwen@gmail.com',
      },
      {
        id: '3',
        title: 'T-shirt 3',
        price: 16,
        quantity: 8,
        like: 0,
        email: 'marwen@gmail.com',
      },
    ];
  }
  buy(id: string) {
    this.listProducts.map((p) => {
      return p.id === id && p.quantity--;
    });
  }

  like(id: string) {
    this.listProducts.map((p) => {
      return p.id === id && p.like++;
    });
  }
}
