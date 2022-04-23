import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from '@angular/core';
import { cartModel } from '@rock-band-ng-store';

@Component({
	selector: 'rock-band-cart-items',
	templateUrl: './cart-items.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemsComponent {
	@Input() cartItms!: cartModel.CartProductEntry[] | null;
}
