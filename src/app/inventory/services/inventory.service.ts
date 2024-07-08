import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inventory } from '../../core/models/inventory.model'; 

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'https://scm.kharchabill.in/api/inventory.php';

  constructor(private http: HttpClient) { }

  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.apiUrl);
  }

  getInventoryById(id: string): Observable<Inventory> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Inventory>(url);
  }
}
