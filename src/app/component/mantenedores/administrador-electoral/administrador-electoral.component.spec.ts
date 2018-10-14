import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorElectoralComponent } from './administrador-electoral.component';

describe('AdministradorElectoralComponent', () => {
  let component: AdministradorElectoralComponent;
  let fixture: ComponentFixture<AdministradorElectoralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorElectoralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorElectoralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
