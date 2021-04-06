import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Surviving2020Component } from './surviving2020.component';

describe('Surviving2020Component', () => {
  let component: Surviving2020Component;
  let fixture: ComponentFixture<Surviving2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Surviving2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Surviving2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
