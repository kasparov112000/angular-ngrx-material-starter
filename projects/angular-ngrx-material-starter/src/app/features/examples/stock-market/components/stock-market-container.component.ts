import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

import { selectStockMarket } from '../stock-market.selectors';
import { actionStockMarketRetrieve } from '../stock-market.actions';
import { StockMarketState } from '../stock-market.model';
import { State } from '../../examples.state';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'anms-stock-market',
    imports: [SharedModule],
    templateUrl: './stock-market-container.component.html',
    styleUrls: ['./stock-market-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class StockMarketContainerComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  stocks$: Observable<StockMarketState>;

  constructor(public store: Store<State>) {}

  ngOnInit() {
    this.stocks$ = this.store.pipe(select(selectStockMarket));
    this.stocks$
      .pipe(take(1))
      .subscribe((stocks) => this.onSymbolChange(stocks.symbol));
  }

  onSymbolChange(event:any) {
    
    const symbol = event.target.value;
    this.store.dispatch(actionStockMarketRetrieve({ symbol }));
  }
}
