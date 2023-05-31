import { Component, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery: any;
  isLoading: boolean = false;
  searchInput: string = "";

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.artService.getGalleryArt().subscribe((response) => {
      this.gallery = response.data;
      this.isLoading = false;
    });
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  searchItems() {
    this.isLoading = true;
    this.artService.getSearchResults(this.searchInput).subscribe((response) => {
      this.gallery = response.data;
      this.isLoading = false;
    })
  }
}
