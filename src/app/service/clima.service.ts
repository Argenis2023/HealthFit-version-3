import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clima } from '../interface/clima.interface';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private Url: string = 'https://api.weatherapi.com/v1/current.json';
  private Key: string = '7e93c0c0a95a4b129d701931240705';

  constructor(private http: HttpClient) {}

  obtenerClima(city: string): Observable<Clima> {
    const url = `${this.Url}?key=${this.Key}&q=${city}`;
    return this.http.get<Clima>(url);
  }

  //obtenerClimaPorCoordenadas(lat: number, lon: number): Observable<Clima> {
   // const url = `${this.Url}?key=${this.Key}&q=${lat},${lon}`;
    //return this.http.get<Clima>(url);
  }







