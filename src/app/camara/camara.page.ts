import { Component} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage  {
  
  image: string = null;  

  constructor(
    public photoService: FotoService,
    private camera: Camera
  ) {}

  ngOnInit()
  {
    this.photoService.loadSaved();
  }

}
