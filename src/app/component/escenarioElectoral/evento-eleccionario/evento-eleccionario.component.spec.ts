import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEleccionarioComponent } from './evento-eleccionario.component';

describe('EventoEleccionarioComponent', () => {
  let component: EventoEleccionarioComponent;
  let fixture: ComponentFixture<EventoEleccionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoEleccionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoEleccionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
