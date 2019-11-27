import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})

class Photo 
{
  data: any;
}

export class FotoService {
  
  public photos: Photo[] = [];
  constructor(private camera: Camera, private storage: Storage) { }

  TomarFoto()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL, //Imagen en base 64
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      //sourceType: this.camera.PictureSourceType.CAMERA  //Tomela desde la Camara del dispositivo
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
    }); 
    this.storage.set('photos', this.photos);
  }, (err) => {
    // Handle error
    console.log("Camera issue: " + err);
    });
  }
  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }
}