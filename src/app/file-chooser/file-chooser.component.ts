import { GCP } from './../models/gcp';
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { GCPsActions } from '../actions';
import * as fromGCPs from '../reducers/gcp.reducer'

@Component({
  selector: 'app-file-chooser',
  templateUrl: './file-chooser.component.html',
  styleUrls: ['./file-chooser.component.scss']
})
export class FileChooserComponent {
  csvRecords: any;

  constructor(
    private ngxCsvParser: NgxCsvParser,
    private store: Store<fromGCPs.State>
  ) {
  }

  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.ngxCsvParser.parse(files[0], { header: true, delimiter: ',' })
      .pipe().subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
          this.store.dispatch(GCPsActions.loadGCPsListSuccess({ GCPs: result as GCP[] }));
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        }
      });
  }
}
