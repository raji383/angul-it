import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap3 } from './cap3';

describe('Cap3', () => {
  let component: Cap3;
  let fixture: ComponentFixture<Cap3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cap3],
    }).compileComponents();

    fixture = TestBed.createComponent(Cap3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
