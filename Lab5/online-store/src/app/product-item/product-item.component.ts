import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product | undefined;

  share(product: {kaspi: string}): void {
    window.open('https://telegram.me/share/url?url=' + product.kaspi)
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
    console.log(this.product?.description.length);
  }

  stars(num: number, check: boolean): string  {
    var text = "";
    for (let i = 0; i < num; i++) {
        if(check){
            text += '⭐️';
        } else {
            text += '☆'
        }
    }
    return text;
  }

  increase(product: {likes: number}) {
    product.likes += 1;
  }
  decrease(product: {likes: number}) {
    product.likes -= 1;
  }

}
