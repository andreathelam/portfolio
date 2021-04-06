import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StardewjournalComponent } from './stardewjournal.component';

describe('StardewjournalComponent', () => {
  let component: StardewjournalComponent;
  let fixture: ComponentFixture<StardewjournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StardewjournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StardewjournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
