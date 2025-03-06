import { Component } from '@angular/core';
import { ArtistCardComponent } from "../artist-card/artist-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artist-list',
  imports: [ArtistCardComponent, CommonModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css',
  standalone: true,
})
export class ArtistListComponent {
  artists = [
    {name: "The Weekend", genre: "R&B", image: "https//via.placeholder.com/150"},
    {name: "Billie Eilish", genre: "Pop", image: "https//via.placeholder.com/150"},
    {name: "Drake", genre: "Hip-Hop", image: "https//via.placeholder.com/150"}
  ];
}
