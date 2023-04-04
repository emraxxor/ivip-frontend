import {Directive, TemplateRef} from '@angular/core';

@Directive({ selector: '[libFormFieldWrapperTemplate]'})
export class CommonFormFieldWrapperTemplateDirective {
  constructor(public template: TemplateRef<any>) {}
}
