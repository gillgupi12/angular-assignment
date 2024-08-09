import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ToastService } from '../../services/toast/toast.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  animations: [
    trigger('openClose', [
      state(
        'closed',
        style({
          visibility: 'hidden',
          right: '-100px'
        })
      ),
      state(
        'open',
        style({
          top: '40px',
      
        })
      ),
      transition('open <=> closed', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class ToastComponent implements  OnDestroy {
  @ViewChild('element', { static: false }) progressBar!: ElementRef;
  progressInterval: any;
  toastContent!: string;
  private subscription?: Subscription;

  constructor(public toastService: ToastService) {
    this.subscription = this.toastService.open.subscribe((data) => {
      if (data.show) {

        this.toastContent = data.content;
        this.countDown();
      } else {


        this.stopCountDown();
      }
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  stopCountDown() {
    clearInterval(this.progressInterval);
  }

  countDown() {
    this.progressBar.nativeElement.style.width =
      this.toastService.data.progressWidth;

    this.progressInterval = setInterval(() => {
      const width = parseInt(this.progressBar.nativeElement.style.width, 10);
      console.log(width)

      if (width <= 0) {
        this.toastService.hideToast();
        clearInterval(this.progressInterval);
        return;
      }

      console.log(this.toastService.data)

      this.toastService.data.progressWidth = String(width - 2);
      this.progressBar.nativeElement.style.width =
        this.toastService.data.progressWidth + '%';
    }, 150);
  }
}