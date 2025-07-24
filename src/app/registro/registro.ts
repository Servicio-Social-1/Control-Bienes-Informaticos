import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-registro',
  imports: [ButtonModule, FormsModule, ReactiveFormsModule, AutoCompleteModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  value: any;
  items: any[] = [];
  itemsSource: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  selectedItem: any;
  filteredItems: any[] = [];

  search(event: any): void {
    if (!event.query) {
      this.items = [];
      return;
    }
    this.items = this.itemsSource.filter((item) =>
      item.toLowerCase().includes(event.query.toLowerCase())
    );
  }

  filterItems(event: any) {
    // Implement your filtering logic here
    // Example:
    this.filteredItems = this.items.filter((item) =>
      item.toLowerCase().includes(event.query.toLowerCase())
    );
  }
}
