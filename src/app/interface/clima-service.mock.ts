import { Observable, of } from 'rxjs';
import { mockClima } from '../Mock/mock-clima';
import { Clima } from '../interface/clima.interface';

export const ClimaServiceMock = {
  obtenerClima: (city: string): Observable<Clima> => of(mockClima),
  //obtenerClimaPorCoordenadas: (lat: number, lon: number): Observable<Clima> => of(mockClima),
};
