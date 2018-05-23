import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionDateComponent } from './excursion-date.component';

describe('ExcursionDateComponent', () => {
  let component: ExcursionDateComponent;
  let fixture: ComponentFixture<ExcursionDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcursionDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
