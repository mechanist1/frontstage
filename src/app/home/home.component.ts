import { Component,OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart1: any;
  chart2: any;
  chart3: any;
 constructor(private http:HttpClient,private router:Router){};



  ngOnInit() {
    // Sample data for demonstration purposes
    const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
    const chartData1 = [25, 35, 20, 45, 30, 60];
    const chartData2 = [30, 40, 35, 50, 28, 55];
    const chartData3 = [22, 28, 25, 30, 18, 34];

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    // Create the bar charts
    this.chart1 = new Chart('chart1', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Temperature Data 1',
            data: chartData1,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: options,
    });

    this.chart2 = new Chart('chart2', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Temperature Data 2',
            data: chartData2,
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: options,
    });

    this.chart3 = new Chart('chart3', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Temperature Data 3',
            data: chartData3,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: options,
    });
  }

  logout():void{

  localStorage.removeItem("token");
  this.router.navigate(['/login'])


  }

}
