import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBankAccountFormComponent } from './user-bank-account-form.component';

describe('EditComponent', () => {
  let component: UserBankAccountFormComponent;
  let fixture: ComponentFixture<UserBankAccountFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBankAccountFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserBankAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
