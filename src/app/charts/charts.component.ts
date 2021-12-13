import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Produit } from '../models/Produit';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
chart:any;
produit = new Produit();

  constructor() { }

  ngOnInit(): void {
    this.chart= document.getElementById('productchart');
    Chart.register(...registerables);
    this.loadChart();
  }
  loadChart():void {
    new Chart (this.chart , {
      type: 'line' ,
      data:{
        datasets: [
         {
         data:[this.produit.prixUnitaire],
         label: 'Prix des nos produits',
         backgroundColor : '#007bff',
         tension: 0.2,
         borderColor: '#007bff',
         },
        ],
        labels:[
          this.produit.libelle
        ]
      }
    })
  }

}
