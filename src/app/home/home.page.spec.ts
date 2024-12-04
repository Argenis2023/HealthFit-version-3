import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { ClimaService } from '../service/clima.service';
import { ClimaServiceMock } from '../interface/clima-service.mock';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      providers: [{ provide: ClimaService, useValue: ClimaServiceMock }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia llamar clima y obtenerlo por la ciudad', () => {
    component.obtenerClimaPorCiudad('Santiago');
    fixture.detectChanges();

    expect(component.clima.location.name).toBe('Santiago');
  });
});

