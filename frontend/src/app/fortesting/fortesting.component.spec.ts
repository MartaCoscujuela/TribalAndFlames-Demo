import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortestingComponent } from './fortesting.component';

describe('FortestingComponent', () => {
  let component: FortestingComponent;
  let fixture: ComponentFixture<FortestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FortestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FortestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
