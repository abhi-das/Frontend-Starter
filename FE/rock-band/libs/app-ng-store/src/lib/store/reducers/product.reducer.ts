import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product, ProductData, ProductEntry } from '../models/product.model';
import { ProductActions } from '../actions';

export interface ProductState extends EntityState<ProductEntry> {
  productError?: string;
}

export const productAdapter: EntityAdapter<ProductEntry> =
  createEntityAdapter<ProductEntry>({
    // selectId: (prd) => (prd.product.id * Math.random()) + '-' + prd.product.name.replace(/ /g, ''),
    selectId: (prd) => prd.product.id,
  });

export const initialProductState = productAdapter.getInitialState({
  productError: '',
});

const hasListLoaded = (state: ProductState) => {
  return {
    ...state,
    productError: '',
  };
};

export const productReducer = createReducer(
  initialProductState,
  on(
    ProductActions.loadProductsSuccessFul,
    (state: ProductState, action: ProductData) => {
      return productAdapter.addMany(action.data, hasListLoaded(state));
    }
  ),
  on(
    ProductActions.loadProductsFailure,
    (state: ProductState, { productLoadingError }) => {
      return {
        ...state,
        productError: productLoadingError,
      };
    }
  ),
  on(ProductActions.updateProductSelection, (state: ProductState, action) => {
    return productAdapter.updateOne(action.update, hasListLoaded(state));
  })
);

export const { selectAll } = productAdapter.getSelectors();
