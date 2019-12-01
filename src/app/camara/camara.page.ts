import { Component} from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FotoService } from '../services/foto.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage  {
  
  constructor(
    public photoService: FotoService
  ) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

}
