import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';

import {RadioOverviewExample} from './app/radio-button/radio-overview-example';
import {RadioNgModelExample} from './app/radio-button/radio-ng-model-example';
import {CheckboxOverviewExample} from './app/checkbox/checkbox-overview-example';
import {CheckboxConfigurableExample} from './app/checkbox/checkbox-configurable-example';
import {SlideToggleOverviewExample} from './app/slide-toggle/slide-toggle-overview-example';
import {SlideToggleConfigurableExample} from './app/slide-toggle/slide-toggle-configurable-example';
import {AutocompleteOverviewExample} from './app/autocomplete/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './app/autocomplete/autocomplete-simple-example';
import {AutocompleteDisplayExample} from './app/autocomplete/autocomplete-display-example';
import {AutocompleteFilterExample} from './app/autocomplete/autocomplete-filter-example';
import {AutocompleteOptgroupExample} from './app/autocomplete/autocomplete-optgroup-example';
import {AutocompleteAutoActiveFirstOptionExample} from './app/autocomplete/autocomplete-auto-active-first-option-example';
import {SelectOverviewExample} from './app/select/select-overview-example';
import {SelectValueBindingExample} from './app/select/select-value-binding-example';
import {SelectFormExample} from './app/select/select-form-example';
import {SelectHintErrorExample} from './app/select/select-hint-error-example';
import {SelectDisabledExample} from './app/select/select-disabled-example';
import {SelectResetExample} from './app/select/select-reset-example';
import {SelectOptgroupExample} from './app/select/select-optgroup-example';
import {SelectMultipleExample} from './app/select/select-multiple-example';
import {SelectCustomTriggerExample} from './app/select/select-custom-trigger-example';
import {SelectNoRippleExample} from './app/select/select-no-ripple-example';
import {SelectPanelClassExample} from './app/select/select-panel-class-example';
import {SelectErrorStateMatcherExample} from './app/select/select-error-state-matcher-example';
import {InputOverviewExample} from './app/input/input-overview-example';
import {InputErrorStateMatcherExample} from './app/input/input-error-state-matcher-example';
import {TextFieldAutosizeTextareaExample} from './app/input/text-field-autosize-textarea-example';
import {InputClearableExample} from './app/input/input-clearable-example';
import {InputErrorsExample} from './app/input/input-errors-example';
import {InputFormExample} from './app/input/input-form-example';
import {InputHintExample} from './app/input/input-hint-example';
import {InputPrefixSuffixExample} from './app/input/input-prefix-suffix-example';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
      SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
      AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
      SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
      SelectNoRippleExample, SelectPanelClassExample, InputOverviewExample, SelectErrorStateMatcherExample, InputErrorStateMatcherExample,
      TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample],
  declarations: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
      SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
      AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
      SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
      SelectNoRippleExample, SelectPanelClassExample, InputOverviewExample, SelectErrorStateMatcherExample, InputErrorStateMatcherExample,
      TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample],
  bootstrap: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, SlideToggleOverviewExample,
      SlideToggleConfigurableExample, AutocompleteOverviewExample, AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample,
      AutocompleteOptgroupExample, AutocompleteAutoActiveFirstOptionExample, SelectOverviewExample, SelectValueBindingExample, SelectFormExample,
      SelectHintErrorExample, SelectDisabledExample, SelectResetExample, SelectOptgroupExample, SelectMultipleExample, SelectCustomTriggerExample,
      SelectNoRippleExample, SelectPanelClassExample, SelectErrorStateMatcherExample, InputOverviewExample, InputErrorStateMatcherExample,
      TextFieldAutosizeTextareaExample, InputClearableExample, InputErrorsExample, InputFormExample, InputHintExample, InputPrefixSuffixExample],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */