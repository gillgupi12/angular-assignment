import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'custom-container',
  standalone: true,
  imports: [CommonModule, FormsModule, NgTemplateOutlet],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
@Input() headerTemplate?:  TemplateRef<any>;
@Input() bodyTemplate?: TemplateRef<any>;
@Input() footerTemplate?: TemplateRef<any>;

}
