import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodedFrontendComponent } from './decoded-frontend.component';

describe('DecodedFrontendComponent', () => {
  let component: DecodedFrontendComponent;
  let fixture: ComponentFixture<DecodedFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodedFrontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecodedFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
