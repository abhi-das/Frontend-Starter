import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rock-product-thumb',
  templateUrl: './product-thumb.component.html',
})
export class ProductThumbComponent {
  @Input() imgSrc?: string;
  @Input() title?: string;
  @Input() price?: number;
  @Input() isCtaDisabled: boolean = false;
  @Output() ctaHandler: EventEmitter<any> = new EventEmitter<any>();

  addToCartHandler(product: any): void {
    this.ctaHandler.emit(product);
  }
}
