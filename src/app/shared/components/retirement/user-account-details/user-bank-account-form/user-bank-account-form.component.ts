import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from "../../../../../core/components/button/button.component";

@Component({
  selector: 'user-bank-account-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  templateUrl: './user-bank-account-form.component.html',
  styleUrl: './user-bank-account-form.component.css',
})
export class UserBankAccountFormComponent {
  @Input() selectedCurrency: string = ''
  @Input() selectedBankAccountNumber: string = ''
  @Input() bankAccountNumbers: string[] = [];
  @Input() currencies: string[] = [];
  @Output() cancelEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  cancel(): void {
    this.cancelEvent.emit();
  }
  submit(): void {
    this.submitEvent.emit({
      bankAccountNumber: this.selectedBankAccountNumber,
      currency: this.selectedCurrency,
    });
  }
}
