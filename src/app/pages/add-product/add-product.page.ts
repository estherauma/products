import { Component, OnInit } from '@angular/core';
import { Product,ProductService } from '../../services/product-service';  

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: false,
})
export class AddProductPage implements OnInit {
  newProduct:Product = <Product>{}
  constructor(private productService:ProductService) {}

  ngOnInit() {}

  createProduct() {
    this.productService.addProduct(this.newProduct);
    this.newProduct = <Product>{};
  }
}
