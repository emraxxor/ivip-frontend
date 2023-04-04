import {CommonFormControl} from '../../model/common-form-control';
import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {CommonFormFieldWrapperTemplateDirective} from './common-form-field-wrapper-template.directive';

@Component({
  selector: 'lib-common-form-wrapper',
  templateUrl: './common-form-field-wrapper.component.html',
})
export class CommonFormFieldWrapperComponent {
  @Input() control!: CommonFormControl;
  @Input() labelClass = 'label';
  @Input() isTemplateHidden = false;
  @ContentChild(CommonFormFieldWrapperTemplateDirective, { read: TemplateRef }) wrapperTemplate!: TemplateRef<any> |  null;
}
