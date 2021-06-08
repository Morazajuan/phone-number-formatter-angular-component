import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberFormatterComponent } from './phone-number-formatter.component';

describe('PhoneNumberFormatterComponent', () => {
  let component: PhoneNumberFormatterComponent;
  let fixture: ComponentFixture<PhoneNumberFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberFormatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
