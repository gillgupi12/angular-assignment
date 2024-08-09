import { NgModule } from '@angular/core';
import { RetirementContainerComponent } from './retirement-container/retirement-container.component';
import { UserAccountDetailsComponent } from './user-account-details/user-account-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContainerComponent } from '../../../core/components/container/container.component';
import { ButtonComponent } from '../../../core/components/button/button.component';
import { UserBankAccountFormComponent } from './user-account-details/user-bank-account-form/user-bank-account-form.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastComponent } from '../../../core/components/toast/toast.component';

@NgModule({
  declarations: [RetirementContainerComponent, UserAccountDetailsComponent],
  imports: [
    FontAwesomeModule,
    CommonModule,
    FormsModule,
    ButtonComponent,
    ContainerComponent,
    UserBankAccountFormComponent,
    ToastComponent,
  ],
  exports: [RetirementContainerComponent, ButtonComponent],
  providers: [provideAnimations()],
})
export class MyRetirementModule {}
