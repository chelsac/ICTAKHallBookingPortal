import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinglistingComponent } from './bookinglisting.component';

describe('BookinglistingComponent', () => {
  let component: BookinglistingComponent;
  let fixture: ComponentFixture<BookinglistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinglistingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookinglistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
