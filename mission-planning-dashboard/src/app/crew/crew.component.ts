import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
<<<<<<< HEAD:mission-planning-dashboard/src/app/crew/crew.component.ts
  crew: string[] = ['Jessica Watkins', 'Raja Chari', 'Jasmin Moghbeli'];
=======

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

>>>>>>> 4c035bb29399ab83ad8449fd192b08e7e3b43303:src/app/crew/crew.component.ts
  constructor() { }

  ngOnInit() {
  }

}
