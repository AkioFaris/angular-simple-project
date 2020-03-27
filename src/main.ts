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

import {RadioOverviewExample} from './app/radio-overview-example/radio-overview-example';
import {RadioNgModelExample} from './app/radio-ng-model-example/radio-ng-model-example';
import {CheckboxOverviewExample} from './app/checkbox-overview-example/checkbox-overview-example';
import {CheckboxConfigurableExample} from './app/checkbox-configurable-example/checkbox-configurable-example';
import {AutocompleteOverviewExample} from './app/autocomplete-overview-example/autocomplete-overview-example';
import {AutocompleteSimpleExample} from './app/autocomplete-simple-example/autocomplete-simple-example';
import {AutocompleteDisplayExample} from './app/autocomplete-display-example/autocomplete-display-example';
import {AutocompleteFilterExample} from './app/autocomplete-filter-example/autocomplete-filter-example';
import {AutocompleteOptgroupExample} from './app/autocomplete-optgroup-example/autocomplete-optgroup-example';
import {AutocompleteAutoActiveFirstOptionExample} from './app/autocomplete-auto-active-first-option-example/autocomplete-auto-active-first-option-example';

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
  entryComponents: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, AutocompleteOverviewExample,
      AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteOptgroupExample,
      AutocompleteAutoActiveFirstOptionExample],
  declarations: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, AutocompleteOverviewExample,
      AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteOptgroupExample,
      AutocompleteAutoActiveFirstOptionExample],
  bootstrap: [RadioOverviewExample, RadioNgModelExample, CheckboxOverviewExample, CheckboxConfigurableExample, AutocompleteOverviewExample,
      AutocompleteSimpleExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteOptgroupExample,
      AutocompleteAutoActiveFirstOptionExample],
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