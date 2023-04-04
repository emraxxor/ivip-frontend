import {ContentChild, Directive, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[libLabelPlaceholder]'
})
export class LabelPlaceholderDirective {

  @ContentChild(TemplateRef) template?: TemplateRef<any> ;

  constructor(
    public viewContainerRef: ViewContainerRef,
  ) { }

}
