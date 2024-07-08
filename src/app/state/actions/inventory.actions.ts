import { createAction, props } from '@ngrx/store';
import { Inventory } from '../../core/models/inventory.model';

export const loadInventories = createAction('[Inventory] Load Inventories');
export const loadInventoriesSuccess = createAction('[Inventory] Load Inventories Success', props<{ inventories: Inventory[] }>());
export const loadInventoriesFailure = createAction('[Inventory] Load Inventories Failure', props<{ error: any }>());
