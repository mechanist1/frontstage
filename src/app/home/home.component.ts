import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chartTemp: any;
  chartMotion: any;
  chartHumidity: any;
 currentdate: string="";
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.fetchChartData();
    this.currentdate = new Date().toLocaleDateString();
  }

  fetchChartData() {
    this.http.get<any[]>('http://localhost:8080/') // Replace with the correct API endpoint
      .subscribe(
        (data) => {
          const labels = data.map(item => item.date);
          const chartDataTemp = data.map(item => item.temp);
          const chartDataMotion = data.map(item => item.motion);
          const chartDataHumidity = data.map(item => item.hum);

          const options = {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          };

          // Create the temperature chart
          this.chartTemp = new Chart('chartTemp', {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Temperature (°C)',
                  data: chartDataTemp,
                  borderColor: 'rgba(255, 99, 132, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: options,
          });

          // Create the motion chart
          this.chartMotion = new Chart('chartMotion', {
            type: 'bar',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Motion',
                  data: chartDataMotion,
                  borderColor: 'rgba(54, 162, 235, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: options,
          });

          // Create the humidity chart
          this.chartHumidity = new Chart('chartHumidity', {
            type: 'line',
            data: {
              labels: labels,
              datasets: [
                {
                  label: 'Humidity (%)',
                  data: chartDataHumidity,
                  borderColor: 'rgba(75, 192, 192, 1)',
                  borderWidth: 1,
                },
              ],
            },
            options: options,
          });
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }

  logout(): void {
    localStorage.removeItem('token');
     this.router.navigate(['/login']);
  }
}
