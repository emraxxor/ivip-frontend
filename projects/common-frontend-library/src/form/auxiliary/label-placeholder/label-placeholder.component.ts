import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'lib-label-placeholder',
  templateUrl: './label-placeholder.component.html',
})
export class LabelPlaceholderComponent implements OnInit {

  @Input() labelTemplate?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
