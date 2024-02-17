import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartDataService {

  private _items_data: any[] = [];

  constructor() { }

  get itemsData(): any[] {
    return this._items_data;
  }

  addItem(item: any): void {
    this._items_data.push(item);
  }

  removeItem(item: any): void {
    const index = this._items_data.indexOf(item);
    if (index !== -1) {
      this._items_data.splice(index, 1);
    }
  }
}
