import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../service/clima.service';
import { Clima } from '../interface/clima.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  clima!: Clima;

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {
    this.obtenerClimaPorCiudad('Santiago');
  }

  obtenerClimaPorCiudad(city: string): void {
    this.climaService.obtenerClima(city).subscribe(
      (data: Clima) => {
        this.clima = data;
        console.log('Clima obtenido:', data);
      },
    );
  }
}






