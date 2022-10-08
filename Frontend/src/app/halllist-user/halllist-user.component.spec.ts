import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalllistUserComponent } from './halllist-user.component';

describe('HalllistUserComponent', () => {
  let component: HalllistUserComponent;
  let fixture: ComponentFixture<HalllistUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalllistUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalllistUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
