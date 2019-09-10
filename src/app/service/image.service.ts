import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
private query: string;
private API_KEY: string = environment.PIXABAY_API_KEY
private API_URL: string = environment.PIXABAY_API_URL


  constructor() { }
}
