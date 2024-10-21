import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, MatButtonModule, MatSidenavModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'admin-taurus';
  showFiller = false;
  showCarruseles = false;
  showSheets = false;
  showConfiguraciones = false;
}
