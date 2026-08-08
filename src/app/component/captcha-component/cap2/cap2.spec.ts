import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap2 } from './cap2';

describe('Cap2', () => {
  let component: Cap2;
  let fixture: ComponentFixture<Cap2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cap2],
    }).compileComponents();

    fixture = TestBed.createComponent(Cap2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
