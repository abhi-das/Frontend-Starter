import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonCtaComponent } from './button-cta/button-cta.component';
import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { GiftWrapComponent } from './gift-wrap/gift-wrap.component';
import { RouterModule } from '@angular/router';
import { NotificationAlertComponent } from './notification-alert/notification-alert.component';
import { NotificationAlertService } from './services/notification-alert.service';

@NgModule({
  imports: [CommonModule, NgbModule, RouterModule],
  declarations: [
    BannerComponent,
    SearchComponent,
    ProductThumbComponent,
    CartItemComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ButtonCtaComponent,
    ContentLoaderComponent,
    GiftWrapComponent,
    NotificationAlertComponent,
  ],
  exports: [
    BannerComponent,
    SearchComponent,
    ProductThumbComponent,
    CartItemComponent,
    PageNotFoundComponent,
    NavbarComponent,
    ButtonCtaComponent,
    ContentLoaderComponent,
    GiftWrapComponent,
    NotificationAlertComponent,
  ],
  providers: [NotificationAlertService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RockUiModule {}
