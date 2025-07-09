import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product: IProduct){
    if(!product) return '';
    return '/images/robot-parts/' + product.imageName;
  }
  
  getDiscountedPrice(product: IProduct){
    if(product.discount > 0) return ['strikethrough bold']
    else return [];
  }

  buyButtonClicked(product:IProduct){
     this.buy.emit();
  }
}
