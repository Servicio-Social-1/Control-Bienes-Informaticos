import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpDisponible } from './ip-disponible';

describe('IpDisponible', () => {
  let component: IpDisponible;
  let fixture: ComponentFixture<IpDisponible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpDisponible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpDisponible);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
