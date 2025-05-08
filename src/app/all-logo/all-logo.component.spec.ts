import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLogoComponent } from './all-logo.component';

describe('AllLogoComponent', () => {
  let component: AllLogoComponent;
  let fixture: ComponentFixture<AllLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
