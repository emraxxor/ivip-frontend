import {AbstractControl, AbstractControlOptions, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {CommonFormGroup} from './common-form-group';
import {CommonFormControl, ICommonErrorComponent} from './common-form-control';


export type TCommonAbstractControl<TValue = any> = CommonFormGroup<TValue> | CommonFormControl<TValue>;


export type ValidatorOpts = ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;


/**
 * This interface is based on AbstractControl of angular forms.
 *
 * For more information please check:
 * See also:
 * [Forms Guide](/guide/forms), [Reactive Forms Guide](/guide/reactive-forms), [Dynamic Forms Guide](/guide/dynamic-form)
 *
 *
 * @author Attila Barna
 */
export interface ICommonFormControl<TValue = any>  {
  readonly value: TValue;
  readonly valueChanges: Observable<TValue>;
  readonly statusChanges: Observable<TValue>;
  readonly hidden: boolean;
  readonly shown: boolean;
  readonly onHiddenChange: Observable<{ hidden: boolean }>;

  validators: ValidatorFn | ValidatorFn[] | null;
  defaultValue: TValue;
  errorComponent?: ICommonErrorComponent;

  preInitValue(value: TValue, options: Parameters<AbstractControl['setValue']>[1]): void;
  setValue(value: TValue, options?: Parameters<AbstractControl['setValue']>[1]): void;
  patchValue(value: TValue, options?: Parameters<AbstractControl['patchValue']>[1]): void;
  reset(value?: TValue, options?: Parameters<AbstractControl['reset']>[1]): void;
  setEnabled(enabled: boolean, options?: Parameters<AbstractControl['enable']>[0]): void;
  resetToDefaultValue(options?: Parameters<CommonFormGroup['reset']>[1]): void;


  /**
   * Retrieves a child control given the control's name or path.
   * Retrieve a nested control
   * For example, to get a name control nested within a person sub-group:
   * this.form.get('person.name'); -OR-
   * this.form.get(['person', 'name']);
   * Params:
   * path – A dot-delimited string or array of string/number values that define the path to the control.
   */
  get<TControl extends TCommonAbstractControl>(path: Array<string | number> | string): TControl | null;

  /**
   * Disables the control. This means the control is exempt from validation checks and
   * excluded from the aggregate value of any parent. Its status is `DISABLED`.
   *
   * If the control has children, all children are also disabled.
   *
   * @see {@link AbstractControl.status}
   *
   * @param opts Configuration options that determine how the control propagates
   * changes and emits events after the control is disabled.
   * * `onlySelf`: When true, mark only this control. When false or not supplied,
   * marks all direct ancestors. Default is false.
   * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
   * `valueChanges`
   * observables emit events with the latest status and value when the control is disabled.
   * When false, no events are emitted.
   */
  disable(opts?: {
    onlySelf?: boolean;
    emitEvent?: boolean;
  }): void;


  setVisible(options?: { emitEvent?: boolean }): void;
  setHidden(options?: { emitEvent?: boolean }): void;


  setValidators(newValidator: ValidatorOpts): void;
  addValidator(validator: ValidatorFn): void;
  removeValidator(validator: ValidatorFn): void;

}



export function createValidators(newValidator: ValidatorOpts | null | undefined): ValidatorFn[] {
  if (newValidator == null) {
    return [];
  }

  if (typeof newValidator === 'function') {
    return [newValidator];
  }

  if (newValidator instanceof Array) {
    return newValidator;
  }

  return createValidators(newValidator.validators);
}


export interface CommonFormControlOptions {
  label?: string;
  labelType?: FormControlLabelType;
  placeholder?: string;
  readonly?: boolean;
  isDisabled?: boolean;
  isHidden?: boolean;
}

export enum FormControlLabelType {
  NORMAL = 'NORMAL'
}
