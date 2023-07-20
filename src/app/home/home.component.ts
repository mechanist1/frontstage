import { Component } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 chart: any;

  ngOnInit() {
    // Sample data for the bar chart
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [25, 35, 20, 45, 30],
          backgroundColor: '#007BFF',
        },
      ],
    };

    // Configuration options for the bar chart
    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the bar chart
    this.chart = new Chart('barChart', {
      type: 'bar',
      data: data,
      options: options,
    });
  }

}
