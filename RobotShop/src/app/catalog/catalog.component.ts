import { Component } from '@angular/core';
import { IProduct} from './product.model';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalog',
  imports: [CommonModule, ProductDetailsComponent, RouterModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  products: IProduct[] = [];
  filter: string = '';

  constructor(private cartService: CartService, 
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute
            ){}
  
  ngOnInit(){
    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.route.queryParams.subscribe((params) => {
      this.filter = params['filter'] ?? '';
    })
  }            

  getFilteredProducts(){
    return this.filter === '' ? this.products : this.products.filter((product) => product.category === this.filter);
  }
  addToCart(product: IProduct){
    this.cartService.add(product);
       console.log('product' + product.name + 'has been added to cart');
    this.router.navigate(['/cart'])
  }
}
