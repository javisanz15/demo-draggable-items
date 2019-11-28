import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManualApproachComponent } from './manual-approach/manual-approach.component';
import {MatCardModule} from '@angular/material/card';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { ComponentPopupComponent } from './component-popup/component-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RemovePopupComponent } from './remove-popup/remove-popup.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ManualApproach2Component } from './manual-approach-2/manual-approach-2.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
   declarations: [
      AppComponent,
      ManualApproachComponent,
      ComponentPopupComponent,
      RemovePopupComponent,
      ManualApproach2Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatCardModule,
      DragDropModule,
      MatButtonModule,
      MatIconModule,
      MatDialogModule,
      FormsModule,
      ReactiveFormsModule,
      MatSelectModule,
      MatFormFieldModule,
      MatGridListModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ComponentPopupComponent,
      RemovePopupComponent
   ]
})
export class AppModule { }
