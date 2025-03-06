import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  imports: [],
  templateUrl: './artist-card.component.html',
  styleUrl: './artist-card.component.css',
  standalone: true,
})
export class ArtistCardComponent {
  @Input() artist: any;
}
