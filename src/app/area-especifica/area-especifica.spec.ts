import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaEspecifica } from './area-especifica';

describe('AreaEspecifica', () => {
  let component: AreaEspecifica;
  let fixture: ComponentFixture<AreaEspecifica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaEspecifica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaEspecifica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
