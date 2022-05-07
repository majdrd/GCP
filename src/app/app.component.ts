import { selectGCPsList } from './selectors/gcp.selectors';
import { GCP } from './models/gcp';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { select, Store } from '@ngrx/store';
import * as fromGCPs from './reducers/gcp.reducer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GCP';
  GCPList$: Observable<GCP[]>;

  constructor(private store: Store<fromGCPs.State>) {
    this.GCPList$ = this.store.pipe(select(selectGCPsList));
  }
}
