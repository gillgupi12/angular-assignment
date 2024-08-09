import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export enum toastTypes {
  error,
  success,
}

export interface ToastData {
  title: string;
  content: string;
  show?: boolean;
  type?: toastTypes;
  progressWidth?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toastData: ToastData = {
    title: '',
    content: '',
    show: false,
    type: toastTypes.error,
    progressWidth: '100%',
  };

  public open = new Subject<ToastData>();

  get data(): ToastData {
    return this.toastData;
  }

  showToast(data: ToastData): void {
    this.toastData = { ...data, show: true, progressWidth: '100%' };
    this.open.next(this.toastData);
  }

  hideToast(): void {
    console.log('called now to close ')
    this.toastData = { ...this.toastData, show: false, progressWidth: '100%' };
    console.log(this.toastData)
    this.open.next(this.toastData);
  }
}