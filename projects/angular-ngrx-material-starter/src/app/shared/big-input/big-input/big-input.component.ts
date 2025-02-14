import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../shared.module';

@Component({
    selector: 'anms-big-input',
    imports: [SharedModule],
    templateUrl: './big-input.component.html',
    styleUrls: ['./big-input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class BigInputComponent {
  @Input()
  placeholder: string;

  @Input()
  value = '';
  @Input()
  disabled = false;

  hasFocus = false;
}
