import {FormGroup} from '@angular/forms';


export interface ICommonFormGroup {

  /**
   * Marks the control and all its descendant controls as touched.
   * See also:
   * `markAsTouched()`
   */
  markAllAsTouched(opts?: { emitEvent?: boolean }): void;

  /**
   * Marks the control as touched. A control is touched by focus and blur events that do not change the value.
   * Params:
   * opts – Configuration options that determine how the control propagates changes and emits events after marking is applied.
   * onlySelf: When true, mark only this control. When false or not supplied, marks all direct ancestors. Default is false.
   * See also:
   * `markAsUntouched()`, `markAsDirty()`, `markAsPristine()`
   *
   */
  markAsTouched(opts?: Parameters<FormGroup['markAsTouched']>[0] & { emitEvent?: boolean }): void;


  /**
   * Marks the control as untouched.
   * If the control has any children, also marks all children as untouched and recalculates the touched status of all parent controls.
   * Params:
   * opts – Configuration options that determine how the control propagates changes and emits events after the marking is applied.
   * onlySelf: When true, mark only this control. When false or not supplied, marks all direct ancestors. Default is false.
   */
  markAsUntouched(opts?: Parameters<FormGroup['markAsUntouched']>[0] & { emitEvent?: boolean }): void;

  /**
   * Submits the given form group
   */
  submit(): void;
}
