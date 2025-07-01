import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAPSIS } from './dap-sis';

describe('DAPSIS', () => {
  let component: DAPSIS;
  let fixture: ComponentFixture<DAPSIS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DAPSIS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DAPSIS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
