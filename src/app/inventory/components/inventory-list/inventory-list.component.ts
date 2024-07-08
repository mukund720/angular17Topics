import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../../core/models/inventory.model';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventories: Inventory[] = [];
  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Inventory>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.getInventories().subscribe({
      next: inventories => {
        this.inventories = inventories;
        this.dataSource.data = inventories;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: error => console.error('Error fetching inventories:', error)
    });
  }
}
