import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import {
  appStore,
  productModel,
  CartActions,
  ProductActions,
} from '@rock-band-ng-store';
import { NotificationAlertService } from '@rock-band-rock-ui';

@Component({
  selector: 'rock-band-product-items',
  templateUrl: './product-items.component.html',
})
export class ProductItemsComponent {
  @Input() productItm: Array<productModel.ProductEntry> | undefined | null;
  updatedProd!: productModel.ProductEntry;
  constructor(
    private readonly _store: Store<appStore.AppState>,
    private readonly _notification: NotificationAlertService
  ) {}
  addToShoppingCart(
    prdItem: productModel.ProductEntry,
    addToCartTemplateRef: TemplateRef<any>
  ): void {
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
    this.updatedProd = {
      ...prdItem,
      isAddedToCart: true,
    };
    this._store.dispatch(
      ProductActions.updateProductSelection({
        update: { id: prdItem.product.id, changes: this.updatedProd },
      })
    );
    this._store.dispatch(
      CartActions.addProductToCartSuccessFul({ productItem: cartItm })
    );
    this._notification.showNotificationAlert(addToCartTemplateRef, {
      classname: 'bg-light',
      delay: 2000,
      autohide: true,
    });
  }
}
