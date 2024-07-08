import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { provideRouter, Route } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { inventoryReducer } from './state/reducers/inventory.reducer';
import { InventoryEffects } from './state/effects/inventory.effects';
import { AuthInterceptor } from '../app/core/auth/auth.interceptor'; 
import { Observable } from 'rxjs';
import { AuthGuard } from './core/auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Define a function to provide AuthInterceptor
export function authInterceptorProvider(): HttpInterceptor {
  return new AuthInterceptor();
}

// Define your routes as before
const routes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('../app/core/auth/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'orders',
    loadComponent: () => import('../app/orders/components/order-list/order-list.component').then(m => m.OrderListComponent),
    canActivate:[AuthGuard]
  },
  {
    path: 'reports',
    loadComponent: () => import('../app/reports/components/report-list/report-list.component').then(m => m.ReportListComponent),
    canActivate:[AuthGuard]

  },
  {
    path: 'suppliers',
    loadComponent: () => import('../app/suppliers/components/supplier-list/supplier-list.component').then(m => m.SupplierListComponent),
    canActivate:[AuthGuard]
  },
  {
    path: 'inventory/detail/:id',
    loadComponent: () => import('../app/inventory/components/inventory-detail/inventory-detail.component').then(m => m.InventoryDetailComponent),
    canActivate:[AuthGuard]
  },
  {
    path: 'inventory',
    loadComponent: () => import('../app/inventory/components/inventory-list/inventory-list.component').then(m => m.InventoryListComponent),
    canActivate:[AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(), // Use the provider function here
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule),
    provideStore({ inventory: inventoryReducer }),
    provideEffects([InventoryEffects])
  ]
};
