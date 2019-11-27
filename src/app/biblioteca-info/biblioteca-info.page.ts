import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca-info',
  templateUrl: './biblioteca-info.page.html',
  styleUrls: ['./biblioteca-info.page.scss'],
})
export class BibliotecaInfoPage implements OnInit {

  canto: HTMLAudioElement;
  reproduciendo: boolean=false;
  sonidoCargado: boolean=false;
  cambio: boolean;

  cantoHermoso(src)
  {
    if (this.sonidoCargado==false){
      this.canto = new Audio();
      this.canto.load();
      this.sonidoCargado=true;
    }
    if (this.reproduciendo==false){      
      this.canto.src = src;
      this.canto.play();
      this.reproduciendo=true;
      this.cambio = true;
    }
    else
    {
      this.canto.pause();
      this.reproduciendo=false;
      this.cambio = false;
    }
  }

  //En pajaros recibo el JSON que viene de la vista biblioteca
  pajaros: any;

  //En este contructor defino los parametros que va a recibir la variable pajaros
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.pajaros = JSON.parse(params.special);
      }
    });
  }

  ngOnInit() {}

}
