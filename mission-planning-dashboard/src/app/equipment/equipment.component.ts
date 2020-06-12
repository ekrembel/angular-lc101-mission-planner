import { Component, OnInit } from '@angular/core';
import { reverse } from 'dns';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
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
remainingMass: number = 2000;
disabled: boolean = false;
nearMax: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  addItem(item: object, button) {
    // button.style.backgroundColor = "white";
    if ( this.cargoMass + item['mass']  <= this.maximumAllowedMass) {
      this.cargoHold.push(item);
      this.cargoMass += item['mass'];
      this.remainingMass -= item['mass'];
      button.disabled = !this.disabled;
      button.style.backgroundColor = "white";
      if (this.cargoHold.length >= 10) {
        this.disabled = true;
        // button.style.backgroundColor = "white";
      }
      if (this.remainingMass <= 200 ) {
        this.nearMax = true;
        return true;
      }
      if (this.remainingMass > 200 ){
        return false;
      }
    }
    else if (this.cargoMass + item['mass']  > this.maximumAllowedMass) {
      this.disabled = true;
    }
  }
  clearCargo() {
    this.cargoHold = [];
    this.cargoMass = 0;
    this.disabled = false;
    this.nearMax = false;
    this.remainingMass = 2000;
    
  }

}
