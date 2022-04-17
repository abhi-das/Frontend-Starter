import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './pipes/product-filter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductFilterPipe
  ],
  exports: [
    ProductFilterPipe
  ],
})
export class RockBandCommonModule {}
