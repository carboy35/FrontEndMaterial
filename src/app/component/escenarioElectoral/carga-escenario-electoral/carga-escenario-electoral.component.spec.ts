import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaEscenarioElectoralComponent } from './carga-escenario-electoral.component';

describe('CargaEscenarioElectoralComponent', () => {
  let component: CargaEscenarioElectoralComponent;
  let fixture: ComponentFixture<CargaEscenarioElectoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaEscenarioElectoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaEscenarioElectoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
