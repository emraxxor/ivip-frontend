import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Injector,
  OnInit,
  ViewChild
} from '@angular/core';
import {CommonFormControlOptions} from '../../model/icommon-form-control';
import {CommonFormFieldComponent} from '../../model/common-form-field.component';
import {PasswordFormControl} from './password-form-control';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'lib-password-field',
  templateUrl: './password.component.html',
  providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true,
  }],
})
export class PasswordComponent
    extends CommonFormFieldComponent<string | null | undefined, CommonFormControlOptions, PasswordFormControl>
    implements OnInit, AfterContentInit, AfterViewInit   {

  @ViewChild('input', { read: ElementRef }) input?: ElementRef<HTMLInputElement>;

  constructor(protected injector: Injector) {
    super(injector);
  }

  initOptions(): CommonFormControlOptions {
    return {};
  }

  ngAfterContentInit() {
    super.ngAfterContentInit();
  }

}
