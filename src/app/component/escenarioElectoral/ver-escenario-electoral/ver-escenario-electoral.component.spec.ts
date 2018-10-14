import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEscenarioElectoralComponent } from './ver-escenario-electoral.component';

describe('VerEscenarioElectoralComponent', () => {
  let component: VerEscenarioElectoralComponent;
  let fixture: ComponentFixture<VerEscenarioElectoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerEscenarioElectoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEscenarioElectoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
