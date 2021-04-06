import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcupidComponent } from './projectcupid.component';

describe('ProjectcupidComponent', () => {
  let component: ProjectcupidComponent;
  let fixture: ComponentFixture<ProjectcupidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectcupidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcupidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
