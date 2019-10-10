import { Component, OnInit } from '@angular/core';
import { Map, tileLayer, marker, icon, L } from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  map: Map;
  
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap()
  {
    var locations = 
    [
      ["LOCATION_1",4.81321, -75.6946],
      ["LOCATION_2",4.81325, -75.6946],
    ];

    this.map = new Map('mapId').setView([4.81321, -75.6946], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

    marker([4.81321, -75.6946]).addTo(this.map)
      .bindPopup('Hormiguero Inmaculado')
      .openPopup();
  }

}
