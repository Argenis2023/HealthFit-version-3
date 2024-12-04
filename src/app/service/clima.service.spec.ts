import { TestBed } from '@angular/core/testing';
import { ClimaService } from './clima.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { mockClima } from '../Mock/mock-clima';

describe('ClimaService', () => {
  let service: ClimaService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ClimaService(httpClientSpy);

    TestBed.configureTestingModule({
      providers: [ClimaService],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Obtiene clima', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(mockClima));
    service.obtenerClima('Santiago').subscribe((data) => {
      expect(data.location.name).toBe('Santiago');
      expect(data.current.temp_c).toBe(19.2);
      done();
    });

    expect(httpClientSpy.get.calls.count()).toBe(1);
    expect(httpClientSpy.get.calls.first().args[0]).toBe(
      'https://api.weatherapi.com/v1/current.json?key=7e93c0c0a95a4b129d701931240705&q=Santiago'
    );
  });
});





