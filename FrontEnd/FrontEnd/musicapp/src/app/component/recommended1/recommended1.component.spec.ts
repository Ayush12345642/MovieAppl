import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recommended1Component } from './recommended1.component';

describe('Recommended1Component', () => {
  let component: Recommended1Component;
  let fixture: ComponentFixture<Recommended1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Recommended1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recommended1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
