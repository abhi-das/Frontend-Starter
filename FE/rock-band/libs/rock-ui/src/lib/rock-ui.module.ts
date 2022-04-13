import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonCtaComponent } from './button-cta/button-cta.component';
import { ContentLoaderComponent } from './content-loader/content-loader.component';

@NgModule({
  imports: [CommonModule, NgbModule],
  declarations: [
    BannerComponent,
    SearchComponent,
    ProductThumbComponent,
    CartItemComponent,
    HeaderComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ButtonCtaComponent,
    ContentLoaderComponent,
  ],
  exports: [
    BannerComponent,
    SearchComponent,
    ProductThumbComponent,
    CartItemComponent,
    HeaderComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ButtonCtaComponent,
    ContentLoaderComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RockUiModule {}
