import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementContainerComponent } from './retirement-container.component';

describe('RetirementContainerComponent', () => {
  let component: RetirementContainerComponent;
  let fixture: ComponentFixture<RetirementContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetirementContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RetirementContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
