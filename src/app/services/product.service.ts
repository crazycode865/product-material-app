import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _baseUrl = 'http://localhost:8080/product-api/products/';
  constructor(private _httpClient: HttpClient) {}
  getProducts = (): Observable<Product[]> => {
    return this._httpClient.get<Product[]>(this._baseUrl);
  };

  getById = (id: number): Observable<Product> => {
    let url = this._baseUrl.concat('productId/') + id;
    return this._httpClient.get<Product>(url);
  };
}
