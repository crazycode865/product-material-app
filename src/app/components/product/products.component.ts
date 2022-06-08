import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsObs!: Observable<Product[]>;
  //inject Router to navigate
  constructor(
    private _productService: ProductService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.productsObs = this._productService.getProducts();
  }
  onSubmit = (product: Product) => {
    console.log(product);
    //to navigate to productdetails component
    this._router.navigate(['/product-details', product.productId]);
  };
}
