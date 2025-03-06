import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ArtistListComponent } from "./components/artist-list/artist-list.component";

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    ArtistListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'portfolio-Page';
}
