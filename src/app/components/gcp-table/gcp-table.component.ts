import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { GCPsActions } from 'src/app/actions';
import { GCP } from 'src/app/models/gcp';
import { TABLE_HEADERS } from 'src/app/constants/gcp-table.constants';
import { selectGCPsList } from 'src/app/selectors/gcp.selectors';
import * as fromGCPs from '../../reducers/gcp.reducer'

@Component({
  selector: 'app-gcp-table',
  templateUrl: './gcp-table.component.html',
  styleUrls: ['./gcp-table.component.scss']
})
export class GcpTableComponent implements OnInit {
  readonly HEADERS = TABLE_HEADERS;
  GCPList$: Observable<GCP[]>;
  data: GCP[];
  displayedColumns: string[] = ['actions', 'name', 'n', 'e', 'h'];

  constructor(private store: Store<fromGCPs.State>) { }

  ngOnInit(): void {
    this.store.pipe(select(selectGCPsList)).subscribe((data) => {
      this.data = data;
    });
  }

  delete(gcp: GCP): void {
    this.store.dispatch(GCPsActions.deleteGCP({ GCP: gcp }));
  }

}
