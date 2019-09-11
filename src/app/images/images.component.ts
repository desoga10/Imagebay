import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  searching: boolean = false;
  constructor(private image: ImageService) {}

  ngOnInit() {}

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  searchImages(query: string) {
    this.searching = true;
    return this.image.getImages(query).subscribe(data => {
      this.handleSuccess(data),
        error => this.handleError(error),
        () => console.log('Request Completed'),
        (this.searching = false);
    });
  }
}
