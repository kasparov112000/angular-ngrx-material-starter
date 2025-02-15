import { Component, OnInit, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LazyElementsModule } from '@angular-extensions/elements';
import { SharedModule } from '../../../shared/shared.module';

@Component({
    selector: 'anms-elements',
    standalone: true,
    imports: [
        SharedModule,
        LazyElementsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
    templateUrl: './elements.component.html',
    styleUrls: ['./elements.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementsComponent implements OnInit {
    ngOnInit(){
    }
    counter = 0;
    routeAnimationsElements = 'route-animations-elements';

    increment() {
        this.counter++;
    }
}
