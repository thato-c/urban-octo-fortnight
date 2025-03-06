import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [BrowserModule, NavbarComponent]
})
export class AppComponent {
  title = 'artist-portfolio';
}
