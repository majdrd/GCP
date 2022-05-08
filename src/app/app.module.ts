import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppComponent } from './app.component';
import { FileChooserComponent } from './components/file-chooser/file-chooser.component';

import * as fromGCPs from './reducers/gcp.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GcpTableComponent } from './components/gcp-table/gcp-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FileChooserComponent,
    GcpTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCsvParserModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(fromGCPs.GCPFeatureKey, fromGCPs.reducer),
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
