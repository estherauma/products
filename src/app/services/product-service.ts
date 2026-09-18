import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular'

export interface Product {
    id:number,
    name:string,
    category:string,
    unitPrice:number,
    quantity:number

}
const STORAGE_KEY = 'products'

@Injectable({providedIn: 'root'})
export class ProductService {
    private storageReady:Promise<Storage>
    constructor(private storage:Storage) {
        this.storageReady = storage.create();

    }

    ready() {
        return this.storageReady;
    }
    async addProduct(product:Product) {
        await this.ready();
        const products:Product[] = await this.storage.get(STORAGE_KEY) || [];
        product.id = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
        products.push(product);
        this.storage.set(STORAGE_KEY,products)
    }
}
