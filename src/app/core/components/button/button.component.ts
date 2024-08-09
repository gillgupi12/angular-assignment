import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'custom-button',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';
  @Input() btnType: string = 'button';
  @Input() btnDisabled: boolean = false;
  @Input() btnClick: () => void = () => {};
  @Input() btnIcon: IconProp | null = null;
  @Input() btnIconPosition: string = 'left';
  @Input() btnBorder: boolean = true;
  @Input() btnTransparent: boolean = false;
  @Input() btnColor: string = 'primary';
}
