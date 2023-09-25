import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOfferComponent } from './activity-offer.component';

describe('ActivityOfferComponent', () => {
  let component: ActivityOfferComponent;
  let fixture: ComponentFixture<ActivityOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
