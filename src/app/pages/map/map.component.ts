import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer, circle, Map } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor() { }

  baseLayer = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  circlesData = {
    'data': [{
      'index': 'LV1002',
      'lat': '56.9173662',
      'lng': '24.1149864',
      'radius': '100',
      'dif': '5'
    },
    {
      'index': 'LV1003',
      'lat': '56.9473662',
      'lng': '24.1199864',
      'radius': '100',
      'dif': '5'
    },
    {
      'index': 'LV1004',
      'lat': '56.9273662',
      'lng': '24.1299864',
      'radius': '100',
      'dif': '5'
    },
    {
      'index': 'LV1005',
      'lat': '56.9573662',
      'lng': '24.16599864',
      'radius': '100',
      'dif': '5'
    }]
  };

  // // Layers control object with our two base layers and the three overlay layers
  // layersControl = {
  //   baseLayers: {
  //     // 'Map': this.baseLayer
  //   },
  //   overlays: {
  //     // 'Circles': this.circles;
  //   }
  // };

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.baseLayer],
    zoom: 8,
    center: latLng([56.879966, 24.726909])
  };


  circleLayers = [];
  map;


  onMapReady(map: Map) {
    console.log('Map ready');
    this.map = map;
  }




  loopCircleData() {

    const object = this.circlesData.data;
    for (const obj in object) {
      if (object.hasOwnProperty(obj)) {
        const cr = object[obj];
        this.createCircle(cr);
      }
    }
  }

  createCircle(cr) {
    console.log('Adding circle: ', cr.index, 'with data: ', cr.lat, '::', cr.lng, '::', cr.radius, '::', cr.dif);
    this.circleLayers[cr.index] = circle([cr.lat, cr.lng], { radius: cr.radius, stroke: false, color: 'red', fillColor: 'red' });

    this.circleLayers[cr.index].on({
      mouseover: () => { this.circleOver(cr.index); },
      mouseout: () => { this.circleOut(cr.index); }
    });

    this.circleLayers[cr.index].addTo(this.map);

  }

  circleOver(index) {
    this.circleLayers[index].setStyle({ color: 'blue', fillColor: 'blue' });
  }
  circleOut(index) {
    this.circleLayers[index].setStyle({ color: 'red', fillColor: 'red' });
  }

}