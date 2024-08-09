import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

interface InvestmentDetails {
  investmentAmount: string;
  investmentAmountBasis: string;
  accumulatedInvestmentAmount: string;
  currentMarketValue: string;
  currency: string;
}

interface UserDetails {
  defaultAccountNumber: string;
  creationDate: string;
  accountNumbers: string[];
  chargeDate: string;
  status: string;
}

export interface UserInvestmentData {
  investmentDetails: InvestmentDetails;
  userDetails: UserDetails;
}

@Injectable({
  providedIn: 'root',
})
export class FakeAjaxService {
  userInvestmentData: UserInvestmentData[] = [
    {
      investmentDetails: {
        investmentAmount: '50,000',
        investmentAmountBasis: 'Monthly',
        accumulatedInvestmentAmount: '50,000',
        currentMarketValue: '50,000',
        currency: 'TWD',
      },
      userDetails: {
        creationDate: '2019-01-18',
        defaultAccountNumber: '0017077019304',
        chargeDate: '1st of the month',
        status: 'Monthly Charge',
        accountNumbers:['0017077019304', '0017077019305', '0017077019306', '0017077019307']
      },
    },
  ];

  getData(): Observable<any> {
    return of({ data: this.userInvestmentData  }).pipe(delay(400));
  }
  postData(data: UserInvestmentData[]): Observable<any> {
    return of({ message: 'Data saved' , data}).pipe(delay(1000));
  }
}
