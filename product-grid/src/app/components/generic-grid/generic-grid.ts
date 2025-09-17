import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GridColumn {
  key: string;      // property name on model
  label: string;    // column header
}

@Component({
  selector: 'app-generic-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-grid.html',
  styleUrls: ['./generic-grid.css']
})
export class GenericGrid {
  @Input() columns: GridColumn[] = [];
  @Input() data: any[] = [];
  @Output() rowClick = new EventEmitter<any>();
}
