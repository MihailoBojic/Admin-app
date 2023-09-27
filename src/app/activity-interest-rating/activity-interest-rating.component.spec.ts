import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityInterestRatingComponent } from './activity-interest-rating.component';

describe('ActivityInterestRatingComponent', () => {
  let component: ActivityInterestRatingComponent;
  let fixture: ComponentFixture<ActivityInterestRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityInterestRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityInterestRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
