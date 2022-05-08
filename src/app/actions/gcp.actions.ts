import { createAction, props } from "@ngrx/store";
import { GCP } from "../models/gcp";

export const loadGCPsListSuccess = createAction(
    '[GCPs] Load GCPs List Success',
    props<{ GCPs: GCP[] }>()
);

export const loadGCPsListFailure = createAction(
    '[GCPs] Load GCPs List Failure'
);

export const deleteGCP = createAction(
    '[GCPs] Delete GCP',
    props<{ GCP: GCP }>()
);