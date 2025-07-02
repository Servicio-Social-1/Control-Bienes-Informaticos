import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposSinIP } from './equipos-sin-ip';

describe('EquiposSinIP', () => {
  let component: EquiposSinIP;
  let fixture: ComponentFixture<EquiposSinIP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposSinIP]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposSinIP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
