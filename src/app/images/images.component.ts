import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: any[];
  constructor(private image: ImageService) {}

  ngOnInit() {}
  searchImages(query: string) {
    return this.image.getImages(query).subscribe(data => {
      console.log(data),
        error => console.log(error),
        () => console.log('Request Completed');
    });
  }
}
