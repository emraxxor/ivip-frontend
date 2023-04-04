import {PasswordComponent} from './password.component';
import {CommonFormControlOptions} from '../../model/icommon-form-control';
import {CommonFormControl} from '../../model/common-form-control';
import {ValidatorFn} from '@angular/forms';

export class PasswordFormControl extends CommonFormControl <string | null | undefined, CommonFormControlOptions, PasswordComponent> {

  constructor(
    formState?: string | null | undefined,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | null,
    public options?: CommonFormControlOptions,
  ) {
    super(PasswordComponent, formState, validatorOrOpts, options);
  }

  initOptions(): CommonFormControlOptions {
    return {};
  }

}
