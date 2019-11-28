import { Component} from '@angular/core';
import { FotoService } from '../services/foto.service';

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
