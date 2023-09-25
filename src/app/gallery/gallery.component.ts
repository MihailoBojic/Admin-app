import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  imagePreview1: string | ArrayBuffer;
  imagePreview2: string | ArrayBuffer;

  onFileSelected(event: any, imageProperty: string) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this[imageProperty] = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }





  constructor() { }

  ngOnInit(): void {
  }

}
