import {Component, OnInit} from '@angular/core';
import {CommonFormGroup} from '../../../../../../../common-frontend-library/src/form/model/common-form-group';
import {Validators} from '@angular/forms';
import {
  PasswordFormControl
} from '../../../../../../../common-frontend-library/src/form/component/password/password-form-control';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  form = new CommonFormGroup<{
    password: string
  }>({
     password: new PasswordFormControl(null, [Validators.required], {} ),
  });

  handleOnClick(e: MouseEvent): void {
        console.log(this.form.getRawValue());
  }


  constructor() { }

  ngOnInit(): void {
  }

}
