import { Component, Input, OnInit } from '@angular/core';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() artwork: any;
  artworkImage: any;

  constructor(private artService: ArtService) { }

  ngOnInit(): void {
    this.getArtworkImage();
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.artworkImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    } else {
      this.artworkImage = "assets/placeholder-image.png";
    }
  }

  getArtworkImage() {
    this.artService.getArtworkImage(this.artwork.image_id).subscribe((response) => {
      this.createImageFromBlob(response);
    });
  }
}
