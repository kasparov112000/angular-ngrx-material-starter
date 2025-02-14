import { Component, OnInit, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/animations/route.animations';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'anms-elements',
    imports: [SharedModule],
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
    
})
export class ElementsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  counter = 0;

  constructor() {}

  ngOnInit() {}

  increment() {
    this.counter++;
  }
}
