import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableEspecifico } from './responsable-especifico';

describe('ResponsableEspecifico', () => {
  let component: ResponsableEspecifico;
  let fixture: ComponentFixture<ResponsableEspecifico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsableEspecifico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsableEspecifico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
