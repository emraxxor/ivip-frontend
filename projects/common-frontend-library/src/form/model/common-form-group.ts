import {
  AbstractControl,
  AbstractControlOptions,
  AsyncValidatorFn,
  FormGroup,
  ValidatorFn,
  Validators
} from '@angular/forms';
import {BehaviorSubject, Subject} from 'rxjs';
import {ICommonFormGroup} from './icommon-form-group';
import {createValidators, ICommonFormControl, TCommonAbstractControl} from './icommon-form-control';
import {CommonFormControl, ICommonErrorComponent, ValidatorOpts} from './common-form-control';

/**
 *  This component is actually an extension of the FormGroup.
 *
 *
 *  @author Attila Barna
 */
export class CommonFormGroup<TValue = any> extends FormGroup implements ICommonFormControl<TValue>, ICommonFormGroup {
  id?: string;

  /**
   * Represents the controls of the component
   */
  controls!: { [key: string]: TCommonAbstractControl };

  /**
   * Validators for the component
   */
  validators!: ValidatorFn[];

  defaultValue: TValue;

  errorComponent?: ICommonErrorComponent;

  readonly onHiddenChange = new Subject<{ hidden: boolean }>();

  readonly shown: boolean = false;

  protected submitSubject = new Subject<CommonFormGroup<TValue>>();

  protected touchedChangesSubject = new BehaviorSubject<boolean>(this.touched);

  protected isHidden = false;

  get hidden(): boolean {
    return this.isHidden;
  }

  get show(): boolean {
    return !this.isHidden;
  }

  get required(): boolean {
    return (this.validators || []).indexOf(Validators.required) >= 0;
  }

  get touchedChanges() {
    return this.touchedChangesSubject.asObservable();
  }


  constructor(
    controls: Record<keyof TValue, TCommonAbstractControl>,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
  ) {
    super(controls, validatorOrOpts, asyncValidator);
    this.defaultValue = this.value;
  }

  /**
   * Retrieves a child control given the control's name or path.
   * Retrieve a nested control
   * For example, to get a name control nested within a person sub-group:
   * this.form.get('person.name'); -OR-
   * this.form.get(['person', 'name']);
   * Params:
   * path – A dot-delimited string or array of string/number values that define the path to the control.
   */

  get<TControl extends TCommonAbstractControl = CommonFormControl>(
      path: Array<string | number> | string | keyof TValue): TControl | null {
    return super.get(path as Array<string | number> | string) as TControl | null;
  }

  /**
   * Retrieves a child control given the control's name or path.
   * Retrieve a nested control
   *
   * Throws an error if the given control could not be found
   *
   * Params:
   * path – A dot-delimited string or array of string/number values that define the path to the control.
   */
  getOrElseThrow<TControl extends TCommonAbstractControl = CommonFormControl>(path: Array<string | number> | string | keyof TValue):
    TControl {
    const control = this.get<TControl>(path);
    if (control == null) {
      throw new Error(`The following control is not found: ${path}.`);
    }
    return control;
  }


  /**
   * Initializes the controls on the component
   *
   */
  preInitValue(value: TValue, options: Parameters<FormGroup['updateValueAndValidity']>[0] = {}): void {
    Object.entries(value).forEach(([name, val]) => {
      this.controls[name].preInitValue(val, {onlySelf: true, emitEvent: options.emitEvent});
    });
    this.updateValueAndValidity(options);
  }

  /**
   * Calls the enable of the AbstractControl
   */
  setEnabled(enabled: boolean, options: Parameters<AbstractControl['enable']>[0] | undefined): void {
    if (enabled) {
      this.enable(options);
    } else {
      this.disable(options);
    }
  }

  /**
   * Sets whether the component should be hidden or not
   */
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

  setValidators(validatorOpts: ValidatorOpts | undefined) {
    this.validators = createValidators(validatorOpts);
    super.setValidators(this.validators);
  }

  /**
   * Clears the validators
   */
  clearValidators() {
    super.clearValidators();
    this.validators = [];
  }

  /**
   * Adds a new validtor to the validators
   *
   * ----------------------------
   * Angular 12 update
   *
   * Since Angular 12, if you want to add new validators to the form without removing the existing validators,
   * you can use addValidators:
   *
   */
  addValidator(validator: ValidatorFn) {
    this.validators?.push(validator);
    super.setValidators(this.validators);
  }

  /**
   * Removes the given validator
   */
  removeValidator(validator: ValidatorFn) {
    this.validators = this.validators?.filter((x) => x !== validator);
    super.setValidators(this.validators);
  }

  submit() {
    this.submitSubject.next(this);
  }

  resetToDefaultValue(options?: Parameters<CommonFormGroup['reset']>[1]): void {
    this.reset(this.defaultValue, options);
  }

  markAsTouched(options?: Parameters<FormGroup['markAsTouched']>[0] & { emitEvent?: boolean }) {
    super.markAsTouched(options);

    if (!options || options.emitEvent !== false) {
      this.touchedChangesSubject.next(this.touched);
    }
  }

  markAsUntouched(opts?: Parameters<FormGroup['markAsUntouched']>[0] & { emitEvent?: boolean }) {
    super.markAsUntouched(opts);

    if (!opts || opts.emitEvent !== false) {
      this.touchedChangesSubject.next(this.touched);
    }
  }

}
