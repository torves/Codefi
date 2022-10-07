import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-directives-demo';
  incomeList = [100, 50, 400];
  expenseList = [100, 75];
  showIncome = true;
  fundraisingGoal = 1000000

  expenseReport() {
    let sum = 0;
    for (let i = 0; i < this.incomeList.length; ++i) {
      sum += this.incomeList[i]
    }
    for (let i = 0; i < this.expenseList.length; ++i) {
      sum -= this.expenseList[i]
    }

    return sum
  }
}
