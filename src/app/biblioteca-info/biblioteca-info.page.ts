import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-biblioteca-info',
  templateUrl: './biblioteca-info.page.html',
  styleUrls: ['./biblioteca-info.page.scss'],
})
export class BibliotecaInfoPage implements OnInit {

  canto(src) {
    console.log(src);
    let canto = new Audio();
    canto.src = src;
    canto.load();
    canto.play();
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

  ngOnInit() {
    
  }

}
