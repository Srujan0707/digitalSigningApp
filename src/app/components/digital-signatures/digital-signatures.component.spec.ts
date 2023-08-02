import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSignaturesComponent } from './digital-signatures.component';

describe('DigitalSignaturesComponent', () => {
  let component: DigitalSignaturesComponent;
  let fixture: ComponentFixture<DigitalSignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalSignaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
