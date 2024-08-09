import { Component } from '@angular/core';
import { FakeAjaxService } from './core/services/fake-ajax/fake-ajax.service';
import { CoreModule } from './core/core.module';
import { RouterOutlet } from '@angular/router';
import { ToastService } from './core/services/toast/toast.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CoreModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [FakeAjaxService, ToastService],
})
export class AppComponent {
  title = 'assignment';
}
