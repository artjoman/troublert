import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  constructor() { }

  map = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });


  circles = {
    LV1000: { lat: 56.9473662, lng: 24.1199864, radius: 100 },
    LV1001: { lat: 56.961892, lng: 24.1230324, radius: 1000 },
    LV1002: { lat: 56.9307861, lng: 24.0666199, radius: 1000 },
    LV1003: { lat: 56.9399729, lng: 24.1387314, radius: 1200 },
    LV1004: { lat: 56.9218272, lng: 24.1104354, radius: 1200 },
    LV1005: { lat: 56.9958331, lng: 24.1144727, radius: 1500 },
    LV1006: { lat: 56.9880202, lng: 24.1964526, radius: 3000 },
    LV1007: { lat: 56.9946275, lng: 24.0764101, radius: 1200 },
    LV1009: { lat: 56.951978, lng: 24.1482538, radius: 1200 },
    LV1010: { lat: 56.9589215, lng: 24.1046542, radius: 1200 },
    LV1011: { lat: 56.9527388, lng: 24.1275531, radius: 1200 }
  };

  // // Layers control object with our two base layers and the three overlay layers
  layersControl = {
    baseLayers: {
      'Map': this.map
    },
    overlays: {
      // 'Circles': this.circles;
    }
  };

  // Set the initial set of displayed layers (we could also use the leafletLayers input binding for this)
  options = {
    layers: [this.map],
    zoom: 8,
    center: latLng([56.879966, 24.726909])
  };


  loopCircleData() {
    for (const key in this.circles) {
      if (this.circles.hasOwnProperty(key)) {
        const value = this.circles[key];
        console.log(key, '::', value.radius);
      }
    }
  }
}
