import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CommonFormFieldWrapperComponent
} from './auxiliary/common-form-field-wrapper/common-form-field-wrapper.component';
import {
  CommonFormFieldWrapperTemplateDirective
} from './auxiliary/common-form-field-wrapper/common-form-field-wrapper-template.directive';
import {PasswordComponent} from './component/password/password.component';
import {MaterialModule} from '../common-library/material/material.module';
import {CommonFormErrorComponent} from './auxiliary/common-form-error/common-form-error.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LabelPlaceholderDirective} from './auxiliary/label-placeholder.directive';
import {LabelPlaceholderComponent} from './auxiliary/label-placeholder/label-placeholder.component';


@NgModule({
  declarations: [
    CommonFormFieldWrapperTemplateDirective,
    CommonFormFieldWrapperComponent,
    PasswordComponent,
    CommonFormErrorComponent,
    LabelPlaceholderDirective,
    LabelPlaceholderComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    ReactiveFormsModule,
    CommonFormFieldWrapperTemplateDirective,
    CommonFormFieldWrapperComponent,
    PasswordComponent,
    LabelPlaceholderDirective,
    LabelPlaceholderComponent
  ]
})
export class FormModule { }
