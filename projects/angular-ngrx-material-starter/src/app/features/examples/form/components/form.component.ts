import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  inject
} from '@angular/core';
import { Validators, UntypedFormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { filter, debounceTime, take, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import {
  ROUTE_ANIMATIONS_ELEMENTS,
  NotificationService
} from '../../../../core/core.module';

import { actionFormReset, actionFormUpdate } from '../form.actions';
import { selectFormState } from '../form.selectors';
import { Form } from '../form.model';

// -- SharedModule for Standalone components imports
import { SharedModule } from '../../../../shared/shared.module';

@Component({
    selector: 'anms-form',
    imports: [SharedModule],
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    
})
export class FormComponent implements OnInit {
  /*
   *
   * @INJECT
   */
  private store = inject(Store);
  private fb = inject(UntypedFormBuilder);
  private translate = inject(TranslateService);
  private notificationService = inject(NotificationService);

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  form = this.fb.group({
    autosave: false,
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    description: [
      '',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000)
      ]
    ],
    requestGift: [''],
    birthday: ['', [Validators.required]],
    rating: [0, Validators.required]
  });

  formValueChanges$: Observable<Form>;

  constructor() {}

  ngOnInit() {
    

    // this.formValueChanges$ = this.form.valueChanges.pipe(
    //   debounceTime(500),
    //   filter((form: Form) => form.autosave)
    // );
    this.formValueChanges$ = this.form.valueChanges.pipe(
      debounceTime(500),
      filter((form: Form) => form.autosave),
      tap((form: Form) => { // Use tap to dispatch the action
        // console.log("🚀 ~ FormComponent ~ tap ~ form:", form)
        this.update(form);
      })
    );
    this.store
      .pipe(select(selectFormState), take(1))
      .subscribe((form) => {
        
        this.form.patchValue(form.form)
      });
  }

  update(form: Form) {
    console.log("🚀 ~ FormComponent ~ update ~ form:", form)
    console.log("🚀 ~ FormComponent ~ update ~ form:", this.form.value)
    this.store.dispatch(actionFormUpdate({ form }));
  }

  save() {
    this.store.dispatch(actionFormUpdate({ form: this.form.value }));
  }

  submit() {
    if (this.form.valid) {
      this.save();
      this.notificationService.info(
        (this.form.value.requestGift
          ? this.translate.instant('anms.examples.form.text4')
          : this.translate.instant('anms.examples.form.text5')) +
          ' : ' +
          this.translate.instant('anms.examples.form.text6')
      );
    }
  }

  reset() {
    this.form.reset();
    this.form.clearValidators();
    this.form.clearAsyncValidators();
    this.store.dispatch(actionFormReset());
  }
}
