import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelbookComponent } from './delbook.component';

describe('DelbookComponent', () => {
  let component: DelbookComponent;
  let fixture: ComponentFixture<DelbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelbookComponent]
    });
    fixture = TestBed.createComponent(DelbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
