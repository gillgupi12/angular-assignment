import { Component, Input, Output } from '@angular/core';
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { MyRetirementModule } from "../../shared/components/retirement/retirement.module";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, MyRetirementModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
}
