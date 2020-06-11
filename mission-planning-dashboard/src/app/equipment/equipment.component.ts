import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment: string[] = ['Habitat dome', 'Drones', 'Food containers', 'Oxygen tanks'];
  itemBeingEdited: string = null;

  equipmentItems: object[] = [
    {name: 'Duct Tape', mass: 0.5},
    {name: 'Space Camera', mass: 20},
    {name: 'Food', mass: 150},
    {name: 'Oxygen Tanks', mass: 400},
    {name: 'AE-35 Unit', mass: 5},
    {name: 'ISS Supplies', mass: 800},
    {name: 'Water', mass: 250},
    {name: 'Satellite', mass: 1200},
    {name: 'R2 Unit', mass: 32}
];
cargoHold: object[] = [];
cargoMass: number = 0;
maximumAllowedMass: number = 2000;
maxItems: number = 10;  


  constructor() { }

  ngOnInit() {
  }
  addItem() {
    // To-Do
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
