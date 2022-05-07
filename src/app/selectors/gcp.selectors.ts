import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGCPs from '../reducers/gcp.reducer';

export const selectGCPsState = createFeatureSelector<fromGCPs.State>(
    fromGCPs.GCPFeatureKey
);

export const selectGCPsList = createSelector(
    selectGCPsState,
    (state: fromGCPs.State) => state.GCPs
);