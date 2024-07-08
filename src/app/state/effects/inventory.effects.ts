import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { InventoryService } from '../../inventory/services/inventory.service';
import { loadInventories, loadInventoriesSuccess, loadInventoriesFailure } from '../actions/inventory.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class InventoryEffects {

  loadInventories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadInventories),
      mergeMap(() => this.inventoryService.getInventories().pipe(
        map(inventories => loadInventoriesSuccess({ inventories })),
        catchError(error => of(loadInventoriesFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private inventoryService: InventoryService
  ) {}
}
