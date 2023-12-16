import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    var myChart2 = new Chart('myChart2', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    var myChart = new Chart('myChart', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'Current value',
            data: [0, 20, 40, 50],
            backgroundColor: 'rgb(115 185 243 / 65%',
            borderColor: '#007ee7',
            fill: true,
          },

          {
            label: 'Invested Amount',
            data: [0, 20, 40, 60, 80],
            backgroundColor: 'rgb(115 185 243 / 65%',
            borderColor: '#007ee7',
            fill: true,
          },
        ],
        labels: ['January 2019', 'Febuary 2019', 'March 2019', 'April 2019'],
      },
    });
  }
  // canvas: any;
  // ctx: any;
  // @ViewChild('mychart') mychart: any;
  // ngAfterViewInit() {
  //   this.canvas = this.mychart.nativeElement;
  //   this.ctx = this.canvas.getContext('2d');

  //   new Chart(this.ctx, {
  //     type: 'line',
  //     data: {
  //       datasets: [
  //         {
  //           label: 'Current value',
  //           data: [0, 20, 40, 50],
  //           backgroundColor: 'rgb(115 185 243 / 65%',
  //           borderColor: '#007ee7',
  //           fill: true,
  //         },

  //         {
  //           label: 'Invested Amount',
  //           data: [0, 20, 40, 60, 80],
  //           backgroundColor: 'rgb(115 185 243 / 65%',
  //           borderColor: '#007ee7',
  //           fill: true,
  //         },
  //       ],
  //       labels: ['January 2019', 'Febuary 2019', 'March 2019', 'April 2019'],
  //     },
  //   });
  // }
}
