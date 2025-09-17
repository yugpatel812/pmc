import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TemperaturePipe} from './temperature-pipe'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-weather',
  imports: [CommonModule, FormsModule,TemperaturePipe],
  templateUrl: './weather.html',
  styleUrl: './weather.css'
})
export class Weather implements OnInit {
 cityName: string = 'Vadodara';
  weatherData: any;
  loading: boolean = false;
  error: string | null = null;
  unit: 'C' | 'F' = 'C';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getWeather();
  }

  toggleUnit(): void {
    this.unit = this.unit === 'C' ? 'F' : 'C';
  }

  getWeather(): void {
    if (!this.cityName) {
      this.error = 'Please enter a city name.';
      return;
    }

    this.loading = true;
    this.error = null;
    this.weatherData = null;

    const apiUrl = `http://localhost:3000/weather?city=${this.cityName}`;
    
    this.http.get<any[]>(apiUrl).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.weatherData = data[0];
          this.weatherData.city = this.cityName;
        } else {
          this.error = `Weather data for "${this.cityName}" not found.`;
        }
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Failed to fetch weather data from JSON Server.';
        this.loading = false;
      }
    });
  }
}
