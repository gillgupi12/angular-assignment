import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FakeAjaxService,
  UserInvestmentData,
} from '../../../../core/services/fake-ajax/fake-ajax.service';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'user-account-details',
  standalone: false,
  templateUrl: './user-account-details.component.html',
  styleUrl: './user-account-details.component.css',
})
export class UserAccountDetailsComponent implements OnInit, AfterViewInit {
  loading = false;
  investmentData: UserInvestmentData[] = [];
  error: any;
  faPencil = faPencil;
  newAccountNumber = 0;

  constructor(private fakeAjaxService: FakeAjaxService) {}

  dialog!: HTMLDialogElement;
  @ViewChild('dialog', { read: ElementRef }) dialogElement: any;

  ngOnInit(): void {
    this.fetchUserInvestmentData();
  }
  ngAfterViewInit(): void {
    (this.dialog as HTMLDialogElement) = this.dialogElement?.nativeElement;
  }
  openDialog() {
    this.dialog?.showModal();
  }

  closeDialog() {
    this.dialog.close();
  }

  updateUserBankAccount(e: { bankAccountNumber: string; currency: string }) {
    this.loading = true;
    if (
      e.currency.toString() !==
      this.investmentData[0].investmentDetails?.currency
    ) {
      console.log('called currency');
      this.investmentData[0].investmentDetails.currency = e.currency.toString();
      this.fakeAjaxService
        .postData(this.investmentData)
        .subscribe((response) => {
          if (response && response.data) {
            this.investmentData = response.data;
            this.loading = false;
            console.log(response);
          }
        });
    }
    if (
      e.bankAccountNumber !==
      this.investmentData[0].userDetails?.defaultAccountNumber
    ) {
      this.investmentData[0].userDetails.defaultAccountNumber =
        e.bankAccountNumber;
      this.fakeAjaxService
        .postData(this.investmentData)
        .subscribe((response) => {
          if (response && response.data) {
            this.investmentData = response.data;
            this.loading = false;
          }
        });
    }

    this.closeDialog()
  }

  fetchUserInvestmentData() {
    this.loading = true;
    this.fakeAjaxService.getData().subscribe(
      (response) => {
        if (response && response.data) {
          this.investmentData = response.data;
          this.loading = false;
        }
      },
      (error) => {
        this.error = error;
      }
    );
  }
  saveUserInvestmentData() {
    console.log('saving user investment data');
  }
  adjustAmount() {
    console.log('adjusting amount');
  }

  changeChargeDate() {
    console.log('charge date has been changed');
  }
  redemMarketValue() {
    console.log('market value has been redemed.');
  }
  suspendAccount() {
    console.log('Account has been suspended');
  }
}
