import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-activity-location',
  templateUrl: './activity-location.component.html',
  styleUrls: ['./activity-location.component.css']
})
export class ActivityLocationComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  selectedLat: number;
  selectedLng: number;
  constructor() { }

  ngOnInit(): void {
    
  }
}


