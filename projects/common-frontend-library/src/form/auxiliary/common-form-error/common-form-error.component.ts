import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ICommonErrorComponent, TCommonFormControl} from '../../model/common-form-control';
import {NG_VALUE_ACCESSOR, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'lib-common-form-error',
  templateUrl: './common-form-error.component.html',
  styleUrls: ['./common-form-error.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonFormErrorComponent),
      multi: true,
    }
  ]
})
export class CommonFormErrorComponent implements OnInit, ICommonErrorComponent {

  displayError = true;

  @Input() control!: TCommonFormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.control.errorComponent = this;
  }

  validationErrorsArray(errors: ValidationErrors | null): [string, any][] {
    if (errors != null) {
      return Array.from(Object.entries(errors));
    }
    return [];
  }

  validationErrorsMap(errors: ValidationErrors | null): ReadonlyMap<string, any> {
    if (errors != null) {
      return new Map(Object.entries(errors));
    }
    return new Map();
  }
}
