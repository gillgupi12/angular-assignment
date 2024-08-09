import { Component, TemplateRef } from '@angular/core';
import { FakeAjaxService } from './core/services/fake-ajax/fake-ajax.service';
import { CoreModule } from './core/core.module';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CoreModule,RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FakeAjaxService],
})
export class AppComponent {
  title = 'assignment';
 
}
