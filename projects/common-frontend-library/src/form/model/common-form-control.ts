import {
  CommonFormControlOptions,
  createValidators,
  ICommonFormControl,
  TCommonAbstractControl
} from './icommon-form-control';
import {AbstractControl, AbstractControlOptions, FormControl, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {Type} from '@angular/core';
import {CommonFormFieldComponent} from './common-form-field.component';

/**
 * This type represents a `FormControl`
 */
export type TCommonFormControl<TValue = any> = CommonFormControl<TValue>;

export interface ICommonErrorComponent {
    displayError: boolean;
}


export type ValidatorOpts = ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;


/**
 *  This component is actually an extension of the form control.
 *
 *  A common form control that will be used in the IVIP project on the frontend side.
 *  It will also contain planned pre-built communication operations to work in conjunction with the backend side.
 *
 *  For more information please check FormControl, AbstractControl.
 */
export class CommonFormControl<
  TValue = any,
  TOptions extends CommonFormControlOptions = CommonFormControlOptions,
  TComponent extends CommonFormFieldComponent = any,
  > extends FormControl implements ICommonFormControl<TValue> {


  /**
   * The list of validators applied to a control.
   */
  validators!: ValidatorFn[];

  component?: TComponent;

  protected isHidden = false;

  defaultValue: TValue;

  errorComponent?: ICommonErrorComponent;

  readonly onHiddenChange = new Subject<{ hidden: boolean }>();

  readonly shown: boolean = true;

  get hidden(): boolean {
    return this.isHidden;
  }

  get show(): boolean {
    return !this.isHidden;
  }

  get required(): boolean {
    return (this.validators || []).indexOf(Validators.required) >= 0;
  }

  constructor(
    public componentType: Type<TComponent>,
    formState?: TValue,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    public options?: TOptions | null,
  ) {
    super(formState, validatorOrOpts);
    this.setValidators(validatorOrOpts || []);
    this.defaultValue = this.value;
  }

  get<TControl extends TCommonAbstractControl = CommonFormControl>(path: Array<string | number> | string): TControl | null {
    return super.get(path) as TControl;
  }

  resetToDefaultValue(options?: { onlySelf?: boolean | undefined; emitEvent?: boolean | undefined; }): void {
    this.reset(this.defaultValue, options);
  }

  addValidator(validator: ValidatorFn): void {
    this.validators.push(validator);
    super.setValidators(this.validators);
  }

  removeValidator(validator: ValidatorFn): void {
    this.validators = this.validators.filter((x) => x !== validator);
    super.setValidators(this.validators);
  }

  focus(options?: FocusOptions) {
    this.component?.focus(options);
  }

  /**
   * Alias AbstractControl#setValue
   *
   */
  preInitValue(value: TValue, options: Parameters<AbstractControl['setValue']>[1]): void {
    this.setValue(value, options);
  }

  setEnabled(enabled: boolean, options: Parameters<AbstractControl['enable']>[0] | undefined): void {
    if (enabled) {
      this.enable(options);
    } else {
      this.disable(options);
    }
  }

  setHidden(options: { emitEvent?: boolean } | undefined): void {
    this.isHidden = true;

    if (!options || options.emitEvent !== false) {
      this.onHiddenChange.next({hidden: this.hidden});
    }
  }

  setVisible(options?: { emitEvent?: boolean }): void {
    this.isHidden = false;

    if (!options || options.emitEvent !== false) {
      this.onHiddenChange.next({hidden: this.hidden});
    }
  }

  setValidators(newValidator: ValidatorOpts | undefined) {
    this.validators = createValidators(newValidator);
    super.setValidators(this.validators);
  }
}
