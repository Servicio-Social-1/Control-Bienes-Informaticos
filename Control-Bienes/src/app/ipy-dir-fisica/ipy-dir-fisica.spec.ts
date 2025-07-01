import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPyDirFisica } from './ipy-dir-fisica';

describe('IPyDirFisica', () => {
  let component: IPyDirFisica;
  let fixture: ComponentFixture<IPyDirFisica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IPyDirFisica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IPyDirFisica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
