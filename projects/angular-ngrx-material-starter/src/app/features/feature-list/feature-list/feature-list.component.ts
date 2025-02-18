import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Feature, features } from '../feature-list.data';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'anms-feature-list',
    imports: [SharedModule],
    templateUrl: './feature-list.component.html',
    styleUrls: ['./feature-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class FeatureListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  ngOnInit() {}

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
