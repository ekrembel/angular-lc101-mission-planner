import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
  experimentBeingEdited: string = null;
  constructor() { }

  ngOnInit() {
  }
  
  add(newItem: string) {
    if (!this.experiments.includes(newItem)) {
      this.experiments.push(newItem);
    }
  }
  remove(item: string) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }
  edit(item: string) {
    this.experimentBeingEdited = item;
  }
  save(newName: string, itemName: string) {
    let index = this.experiments.indexOf(itemName);
    this.experiments[index] = newName;
  }

}

