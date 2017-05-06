import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IonicModule } from 'ionic-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdSelectModule, MdMenuModule, MdButtonModule, MdDialogModule, MdTabsModule, MdInputModule, MdAutocompleteModule, MdCardModule, MdListModule, MdGridListModule, MdProgressSpinnerModule, MdSlideToggleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdSelectModule, MdMenuModule, MdButtonModule, MdDialogModule, MdTabsModule, MdInputModule, MdAutocompleteModule, MdCardModule, MdListModule, MdGridListModule, MdProgressSpinnerModule, MdSlideToggleModule,
    IonicModule.forRoot(AppComponent)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
