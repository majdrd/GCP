import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCsvParserModule } from 'ngx-csv-parser';

import { AppComponent } from './app.component';
import { FileChooserComponent } from './file-chooser/file-chooser.component';

@NgModule({
  declarations: [
    AppComponent,
    FileChooserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCsvParserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
