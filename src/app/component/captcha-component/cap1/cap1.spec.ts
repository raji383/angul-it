import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap1 } from './cap1';

describe('Cap1', () => {
  let component: Cap1;
  let fixture: ComponentFixture<Cap1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cap1],
    }).compileComponents();

    fixture = TestBed.createComponent(Cap1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
