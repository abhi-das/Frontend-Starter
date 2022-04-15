import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Product, ProductEntry } from '../models/product.model';

export const loadProducts = createAction(
  '[Load Products Resolver] Load Products'
);

export const loadProductsSuccessFul = createAction(
  '[Load Products Effect] Loaded Selected Products',
  props<{ data: ProductEntry[] }>()
);

export const loadProductsFailure = createAction(
  '[Load Products Effect] Loading Failed',
  props<{ productLoadingError: string }>()
);

export const updateProductSelection = createAction(
  '[Update IsAddedToCart flag] Update Products IsAddedToCart',
  props<{ update: Update<ProductEntry> }>()
);
