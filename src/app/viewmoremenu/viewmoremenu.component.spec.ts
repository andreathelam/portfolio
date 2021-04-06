import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmoremenuComponent } from './viewmoremenu.component';

describe('ViewmoremenuComponent', () => {
  let component: ViewmoremenuComponent;
  let fixture: ComponentFixture<ViewmoremenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmoremenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmoremenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
