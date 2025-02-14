import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../../core/core.module';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../../shared/shared.module';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'anms-parent',
    imports: [SharedModule, ChildComponent],
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class ParentComponent implements OnInit {
  themeSrc: string = require('!raw-loader!./parent.component.scss-theme.scss')
    .default;
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor() {}

  ngOnInit() {}
}
