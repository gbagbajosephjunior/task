import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfirmationComponent } from './comfirmation.component';

describe('ComfirmationComponent', () => {
  let component: ComfirmationComponent;
  let fixture: ComponentFixture<ComfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComfirmationComponent]
    });
    fixture = TestBed.createComponent(ComfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
