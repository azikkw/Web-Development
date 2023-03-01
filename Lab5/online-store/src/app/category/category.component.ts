import { Component } from '@angular/core';

import { categories } from '../categories';
import { products } from '../products';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  product = products;
  categories = categories;
  currentCategory : string | undefined

  Show(category: string) {
    this.product.forEach(e => {
      e.description = (e.description.length < 245) ? e.description : e.description.substring(0, 220) + ' ...';
    });
    this.currentCategory = category;
  }
}

// if(category == 'All categories') {
//   this.product.forEach(e => {
//       this.currentCategory = e.category;
//   });
// }
// this.product.forEach(e => {
//   if(e.category == category.toLowerCase()) {
//     console.log(e.category);
//     this.currentCategory = category;
//   }
// });
