import { Component } from '@angular/core';

/**
 * Generated class for the PhotosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'photos',
  templateUrl: 'photos.html'
})
export class PhotosComponent {

  text: string;

  constructor() {
    console.log('Hello PhotosComponent Component');
    this.text = 'Hello World';
  }

}
