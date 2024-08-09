import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faEarthAmericas, faSortDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faUser = faUser;
  faEarth = faEarthAmericas;
  faSortDown= faSortDown;

}
