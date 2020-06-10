import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  itemBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }

  add(name: string) {
    if (!this.equipment.includes(name)) {
      this.equipment.push(name);
    }
  }
  remove(item: string) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }
  edit(item: string) {
    this.itemBeingEdited = item;
  }
  save(newName: string, itemName: string) {
    let index = this.equipment.indexOf(itemName);
    this.equipment[index] = newName;
    this.itemBeingEdited = null;
  }
}
