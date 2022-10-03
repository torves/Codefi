import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
  canOpenMoreBoxes = false;
  boxMockText = "You should open a box man.";
  boxName = "Default Box";
  hasOpenedABox = false;

  boxes = [
    // dummy data
    "Box 1",
    "Box 2",
    "Box 3",
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.canOpenMoreBoxes = true, 3000)
  }

  onOpenBox() {
    this.boxMockText = `You just opened another box called: ${this.boxName}` 
    this.hasOpenedABox = true;

    this.boxes.push(this.boxName);
  }

}
