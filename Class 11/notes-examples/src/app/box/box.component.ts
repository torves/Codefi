import { Component } from "@angular/core";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  boxNumber = 2;
  isEmpty = false;

  constructor() {
    this.isEmpty = Math.random() > 0.5
  }

  getColor() {
    return this.isEmpty === true ? 'red' : 'green'
  }
}