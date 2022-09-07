import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceRoomListComponent } from './conference-room-list.component';

describe('ConferenceRoomListComponent', () => {
  let component: ConferenceRoomListComponent;
  let fixture: ComponentFixture<ConferenceRoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferenceRoomListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConferenceRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
