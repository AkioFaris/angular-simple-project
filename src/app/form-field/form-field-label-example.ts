import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

/** @title Form field with label */
@Component({
  selector: 'form-field-label-example',
  templateUrl: 'form-field-label-example.html',
  styleUrls: ['form-field-label-example.css'],
})
export class FormFieldLabelExample {
  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
