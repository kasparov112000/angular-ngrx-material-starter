import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'anms-child',
    imports: [SharedModule],
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
