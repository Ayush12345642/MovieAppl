import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritecomponentComponent } from './favouritecomponent.component';

describe('FavouritecomponentComponent', () => {
  let component: FavouritecomponentComponent;
  let fixture: ComponentFixture<FavouritecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
