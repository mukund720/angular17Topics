import { createReducer, on } from '@ngrx/store';
import { loadInventoriesSuccess, loadInventoriesFailure } from '../actions/inventory.actions';
import { Inventory } from '../../core/models/inventory.model';

export interface InventoryState {
  inventories: Inventory[];
  error: any;
}

export const initialState: InventoryState = {
  inventories: [],
  error: null
};

export const inventoryReducer = createReducer(
  initialState,
  on(loadInventoriesSuccess, (state, { inventories }) => ({ ...state, inventories })),
  on(loadInventoriesFailure, (state, { error }) => ({ ...state, error }))
);
