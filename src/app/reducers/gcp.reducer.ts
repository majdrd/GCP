import { GCP } from './../models/gcp';
import { Action, createReducer, on } from '@ngrx/store';
import { GCPsActions } from '../actions';

export const GCPFeatureKey = 'gcp';

export interface State {
    GCPs: GCP[];
}

export const initialState: State = {
    GCPs: []
}

const GCPsReducer = createReducer(
    initialState,
    on(GCPsActions.loadGCPsListSuccess, (state, { GCPs }) => {
        return {
            ...state,
            GCPs
        };
    })
);

export function reducer(state: State | undefined, action: Action) {
    return GCPsReducer(state, action);
}