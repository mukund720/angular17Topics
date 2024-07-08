import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { inventoryReducer } from './reducers/inventory.reducer';
import { InventoryEffects } from './effects/inventory.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ inventory: inventoryReducer }),
    EffectsModule.forRoot([InventoryEffects])
  ]
})
export class StateModule { }
