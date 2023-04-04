import {CommonFormControlOptions} from './icommon-form-control';
import {CommonFormControl} from './common-form-control';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  CommonFormFieldWrapperComponent
} from '../auxiliary/common-form-field-wrapper/common-form-field-wrapper.component';
import {
  CommonFormFieldWrapperTemplateDirective
} from '../auxiliary/common-form-field-wrapper/common-form-field-wrapper-template.directive';


@Component({
  template: ''
})
export abstract class CommonFormFieldComponent<TValue = unknown,
  TOptions extends CommonFormControlOptions = CommonFormControlOptions,
  TControl extends CommonFormControl<TValue, TOptions> = any> implements ControlValueAccessor, OnInit, AfterContentInit, AfterViewInit {

  htmlElement!: HTMLElement;
  control?: TControl;
  options!: TOptions;
  isDisabled = false;

  @ViewChild(CommonFormFieldWrapperComponent) wrapperComponent?: CommonFormFieldWrapperComponent | null;
  @ContentChild(CommonFormFieldWrapperTemplateDirective, {read: TemplateRef}) wrapperTemplate!: TemplateRef<any> | null;

  onChange: (value: any) => void = () => {};

  onTouched: () => void = () => {};

  constructor(protected injector: Injector) {
  }

  ngOnInit(): void {
    this.htmlElement = this.injector.get(ElementRef).nativeElement;
    this.options = Object.assign(
      {
        label: '',
        placeholder: '',
      },
      this.initOptions()
    );
  }

  ngAfterViewInit() {
    if (this.wrapperComponent != null && this.wrapperTemplate != null) {
      setTimeout(() => {
        if (this.wrapperComponent != null) {
          this.wrapperComponent.wrapperTemplate = this.wrapperTemplate;
        }
      });
    }
  }

  ngAfterContentInit(): void {
    this.control = this.injector.get<NgControl>(NgControl).control as TControl;
    if (this.control != null) {
      this.control.component = this;
      this.control.options = {...this.options, ...this.control.options} as TOptions;
    }
  }

  abstract initOptions(): TOptions;

  get required(): boolean {
    return this.control?.required ?? false;
  }


  get controlOptions(): TOptions {
    return this.control?.options ?? this.options;
  }

  registerOnChange(fn: (v: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(obj: TValue): void {
  }

  focus(options?: FocusOptions) {
  }

}

