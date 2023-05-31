import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.scss']
})
export class ArtDetailsComponent implements OnInit {
  artwork: any;
  isLoading: boolean = false;
  artworkImage: any;

  constructor(private route: ActivatedRoute, private artService: ArtService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.pipe(
      switchMap(params => this.artService.getArtworkDetails(params['id']))
    ).subscribe((response) => {
      this.artwork = response.data;
      this.getArtworkImage();
      this.isLoading = false;
    });
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
