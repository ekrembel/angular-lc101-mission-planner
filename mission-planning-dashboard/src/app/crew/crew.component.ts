import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})

export class CrewComponent implements OnInit {
  crew: object[] = [];
  inCrew: boolean = false;
  selected: number = 9;
  

  candidates: object[] = [
    {name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];
  

  constructor() { }

  ngOnInit() {

  }
 
  addCrewMember(member, index) {
    index.style.color = 'black';
    if (this.crew.length < 3 && !this.crew.includes(member)) {
      this.crew.push(member);
      this.inCrew = true;
      index.style.color = 'blue'; 
    }
    else if (this.crew.includes(member)) {
      let index = this.crew.indexOf(member);
      this.crew.splice(index, 1);
      this.inCrew = false;
    }
  }
  over(index) {
    this.selected = index;
  }
  out() {
    this.selected = 9;
  }
}
