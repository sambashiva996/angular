import { Component } from '@angular/core';
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ SiteHeaderComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'joes-robot-shop';
}
