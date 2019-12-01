import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { NumericValueAccessor } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
class Photo {
 data: any;
  latitud: number;
  longitud: number;
}

export class FotoService {
  public photos: Photo[] = [];
  public cords =[];
  public pos:Coordinates;
  constructor(private camera: Camera, private storage: Storage, private geolocation:Geolocation) { }
  CapturarPos(){
    this.geolocation.getCurrentPosition({ timeout: 30000 }).then((geoposition: Geoposition)=>{
      this.pos=geoposition.coords;
      console.log(this.pos);
      });
     
  }
  
  TomarFoto()
  {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL, //Imagen en base 64
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      
    };
    this.CapturarPos();
    console.log("aca")
    console.log(this.pos)
    this.camera.getPicture(options)
    .then((imageData) => {
       this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData,
        latitud : this.pos.latitude,
        longitud: this.pos.longitude
    }); 
    console.log(this.photos[0].latitud)
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


