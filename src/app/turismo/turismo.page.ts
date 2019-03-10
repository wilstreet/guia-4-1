import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {

   arrayturismo = [
   {  
    nombre: "Islas corales del rosario",
    img:"http://www.colparques.net/images/corales/1.jpg",
    lugar: "bolivar",
    parrafo:" Las islas consisten en una pequeña plataforma compuesta de sucesivas formaciones coralinas a diferentes profundidades."
    },
    {
    nombre: "Santa cruz del islote",
    img:"https://cnnespanol2.files.wordpress.com/2018/08/santa-cruz-island-aerial-turquoise.jpg?quality=100&strip=info&strip=info",
    lugar: "bolivar",
    parrafo:" Es famoso por atribuírsele ser una de las islas más densamente pobladas de la Tierra."
    },
    {
    nombre:"Parque tayrona",
    img:"https://admin.kienyke.com/wp-content/uploads/2018/01/WhatsApp-Image-2018-01-27-at-3.56.11-PM.jpeg",
    lugar:"Magdalena",
    parrafo:"una gran zona protegida que abarca las laderas de la Sierra Nevada de Santa Marta en las zonas adyacentes a la costa del Caribe.",
    },
    {
    nombre:"Palomino",
    img:"http://www.renunciamosyviajamos.com/wp-content/uploads/2015/04/Palomino-La-Guajira-Renunciamos-y-viajamos-5.jpg",
    lugar:"la guajira",
    parrafo:"Su territorio tiene todos los pisos térmicos, desde el nivel del mar hasta las nieves perpetuas de la Sierra Nevada de Santa Marta.",
    },
    {
    nombre:"Puerto Nariño",
    img:"http://www.anticorrupcion.gov.co/PublishingImages/puerto-narino-amazonas.jpg",
    lugar:"Amazonas",
    parrafo:"Se accede al municipio desde Leticia por vía fluvial, a través del río Amazonas.",
    },
    {
    nombre:"san andres",
    img:"https://static.iris.net.co/dinero/upload/images/2017/5/24/245833_1.jpg",
    lugar:"san andres islas",
    parrafo:"San Andrés es una isla colombiana del mar Caribe, frente a la costa de Nicaragua.",
    },
    {
    nombre:"Rio Ariari",
    img:"https://colombiaextraordinaria.com/somos_colombia/external/img/img_departamentos/Granadaimagen_t.jpg",
    lugar:"Meta",
    parrafo:"Tiene su nacimiento en el denominado Páramo de Sumapaz, el cual se encuentra en el alto de las Oseras.",
    },
    {
      nombre:"Aguadas",
      img:"https://www.elespectador.com/sites/default/files/aguadas2.jpg",
      lugar:"Caldas",
      parrafo:"Aguadas hace parte del Paisaje Cultural Cafetero declarado Patrimonio de la humanidad por la Unesco en el año 2011.",
      },
      {
        nombre:"cienaga",
        img:"https://seguimiento.co/sites/default/files/styles/1010x526/public/2017/8/14/articulo/foto_ciena.jpg?itok=UuUEqBSY",
        lugar:"Magdalena",
        parrafo:"Ciénaga es famoso por el pescado acompañado de arroz con coco, patacones y ensalada.",
        },
        {
        nombre:"Piedra del peñon",
        img:"https://s29081.pcdn.co/wp-content/uploads/2018/07/la-piedra-del-penol-guatapae-rock-0042-900x635.jpg.optimal.jpg",
        lugar:"Antioquia",
        parrafo:"La piedra se ha convertido en un atractivo turístico del lugar, junto a la represa que la rodea. Miles de personas de todo el mundo han visitado el lugar.",
        },

 ]

  constructor() { }

  ngOnInit() {
  }

}
