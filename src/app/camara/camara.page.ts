import { Component} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage  {
  
  image: string = null;  

  constructor(
    private camera: Camera
  ) {}

  TomarFoto()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI, //Imagen en base 64
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA  //Tomela desde la Camara del dispositivo
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.image = 'data:image/jpeg;base64' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

}
