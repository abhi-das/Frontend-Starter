import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  appStore,
  productModel,
  CartActions,
  ProductActions,
} from '@rock-band-ng-store';

@Component({
  selector: 'rock-band-product-items',
  templateUrl: './product-items.component.html',
})
export class ProductItemsComponent {
  @Input() productItm: Array<productModel.ProductEntry> | undefined | null;

  constructor(private readonly _store: Store<appStore.AppState>) {}
  addToShoppingCart(prdItem: productModel.ProductEntry): void {
    const cartItm = {
      id: prdItem.product.id,
      products: [
        {
          id: prdItem.product.id,
          name: prdItem.product.name,
          price: prdItem.product.price,
          quantity: 1,
        },
      ],
    };
    const updatedProd = {
      ...prdItem,
      isAddedToCart: true,
    };
    this._store.dispatch(
      ProductActions.updateProductSelection({
        update: { id: prdItem.product.id, changes: updatedProd },
      })
    );
    this._store.dispatch(
      CartActions.addProductToCartSuccessFul({ productItem: cartItm })
    );
  }
}
