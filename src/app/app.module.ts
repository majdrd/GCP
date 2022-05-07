import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppComponent } from './app.component';
import { FileChooserComponent } from './file-chooser/file-chooser.component';

import * as fromGCPs from './reducers/gcp.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FileChooserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCsvParserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromGCPs.GCPFeatureKey, fromGCPs.reducer),
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
