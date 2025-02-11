import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'anms-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
