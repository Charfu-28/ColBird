import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  pajaros=[
    {
      nombre:"Atrapamoscas maculado",
      imagen : "/assets/Imagenes/Atrapamoscas.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",
      contenido : "Atrapamoscas grande y fuertemente estriado, con frecuencia ruidoso. Su nombre Myiodynastes significa señor de las moscas, derivado de la raíces griegas muia = mosca y dynástes = señor."
    },

    {
      nombre:"Atrapamoscas Ocráceo",
      imagen : "/assets/Imagenes/Ocraceo.jpg", //No es el correcto canto
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",
      contenido : " Su nombre significa ave pequeña de color oliva y deriva del griego meionektes = pequeño y del latín oleagineus = coloreado de oliva."
    },
    
    {
      nombre:"Barranquero andino",
      imagen : "/assets/Imagenes/Atrapamoscas.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3", //No es el canto correcto
      contenido : "Barranquero de tierras altas de los Andes, silencioso y poco conspicuo a pesar de su gran tamaño. "
    },

    {
      nombre:"Baratá carcajada",
      imagen : "/assets/Imagenes/Batara.jpg",
      sonido : "/assets/Cantos/Carcajada.mp3",
      contenido : "Las poblaciones de esta especie se encuentran principalmente en Colombia y una pequeña porción del noroeste de Venezuela. Su nombre Thamnophilus proviene de las raíces griegas thamnos = arbusto y philos = amante de. "
    },

    {
      nombre:"Batara Occidental",
      imagen : "/assets/Imagenes/bata_oc.jpg",
      sonido : "/assets/Cantos/Occidental.mp3",
      contenido : "Anteriormente considerada como una raza de T. punctatus. Su nombre Thamnophilus proviene de las raíces griegas thamnos = arbusto y philos = amante de."
    },

    {
      nombre:"Hormiguero Inmaculado",
      imagen : "/assets/Imagenes/hormiguero.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",//No es el correcto
      contenido : " El hormiguero inmaculado (en Colombia) (Hafferia immaculata), es una especie de ave paseriforme perteneciente al género Hafferia de la familia Thamnophilidae. Anteriormente formaba parte del amplio género Myrmeciza, de donde fue separada recientemente, en 2013. Es nativa del noroeste de América del Sur."
    },

    {
      nombre:"Cucarachero pechiblanco",
      imagen : "/assets/Imagenes/Atrapamoscas.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.jpg",
      contenido : "Su nombre hace referencia a su pico particularmente largo y los orificios nasales ligeramente ocultos. A menudo los individuos de esta especie son muy obvios y curiosos, aunque son adeptos de permanecer ocultos."
    },

    {
      nombre:"Cucarachero jaspeado",
      imagen : "/assets/Imagenes/jaspeado.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",//No es el correcto
      contenido : "El espatulilla común es un pájaro pequeño con la cabeza proporcionalmente grande y pico negro, largo y recto."
    },

    {
      nombre:"Espatulilla común",
      imagen : "/assets/Imagenes/espatulilla.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3",// No es el correcto
      contenido : "Atrapamoscas grande y fuertemente estriado, con frecuencia ruidoso. Su nombre Myiodynastes significa señor de las moscas, derivado de la raíces griegas muia = mosca y dynástes = señor."
    },

    {
      nombre:"Tororoi dorsiescamado",
      imagen : "/assets/Imagenes/tororoi.jpg",
      sonido : "/assets/Cantos/Atrapa_Maculado.mp3", // No es el correcto
      contenido : "Esta especie es principalmente terrestre y le gusta saltar sobre el suelo o en troncos caidos, ocasionalmente se percha en ramas en el sotobosque. Busca de lombrices, insectos grandes, otros invertebrados y ranitas."
    },

    {
      nombre:"Trepatroncos cacao",
      imagen : "/assets/Imagenes/Trepador.jpg",
      sonido : "/assets/Cantos/Trepatroncos.mp3",
      contenido : "Anteriormente considera conespecífica con X. guttatus de la cual difiere en tamaño y canto."
    }
  ]

  canto(src)
  {
    console.log(src);
    let canto = new Audio();
    canto.src = src;
    canto.load();
    canto.play();
  }

  constructor() { }

  ngOnInit() {
  }

}
