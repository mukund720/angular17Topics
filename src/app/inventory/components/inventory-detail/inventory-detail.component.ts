import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryService } from '../../services/inventory.service';
import { Inventory } from '../../../core/models/inventory.model';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.scss']
})
export class InventoryDetailComponent implements OnInit {
  inventory: Inventory | undefined;

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService
  ) {
    this.inventory = undefined; // Initialize as undefined
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.inventoryService.getInventoryById(id).subscribe(
        inventory => this.inventory = inventory,
        error => console.error('Error fetching inventory:', error)
      );
    }
  }
}
