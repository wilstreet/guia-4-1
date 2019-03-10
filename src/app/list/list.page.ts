import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
})
export class ListPage implements OnInit {

  arraylist = [
    {
      pais: "Canada",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABLCAMAAABKveUfAAAAaVBMVEX/AAD/////YWH//Pz/7e3/amr/8/P/6ur/1NT/gID/29v/ZWX/8PD/mZn/q6v/ra3/trb/xsb/n5//zMz/k5P/Tk7/4+P/Rkb/hYX/Cwv/U1P/W1v/paX/ODj/ISH/wcH/Pj7/cHD/LS0eiqfYAAACfklEQVRoge2Za5eqIBSGJcRLmmbeG6/9/x85SDZlkDit2cBZp/dDF3i3PgsQYWNZW7RDf6fdpjtu04frw/Xh+te4KjO5PMszkmuwBhO5eurrDeRqqa81jytixsg0Lqdjxs4xjOswOw+GcGFSTF9hPTvrcPpbBFh3e5XWSFGqHyudXMPRKnW3F8poNQkevAGhH5l2rqMw4Kiday8M2GvnQsKAFb8qrovAfzGAyxf4fQO4YoE/1sjlznOBJ/DPC7HM1cAV3SYDgf9acRS+xmG4wp8XDJ1LU/aj5uw1K0/pHHsz4xCYq6pJltp4biY2TY2cfZyK2cQ2IdlpRqwKmOs6mgbSsMt30wA6cfYTLXXZwmfXkIEVecBcT6OpDVl/PYn2b9gui8DHPVnW5Bi5nN1FOF+WEHCu6Knqy244e2R/PZeAc9lvXcAG50Kt3M7pcZ8ExVXJ7ZwqBVzJG/GpAi7+8ZMrhOdKc7md0zkF5urLN69Q9qBc7wyuq1JQLmSLls1yXe4TGNS4D+R2TsFDPNi6kF8/yHRCKrhQwq8E11QnSA0XKn7zLhoKpIoL4e2DjMvswO47DvIgJj4fBrwf6jcFChLB0Pu0opOGdYUgDny/jc+SqLMwaaggDyBKTdz1IkmhgGt9ySNKAqjhEqUm7nqRm1PAla0GvcixwnPh22Ksy4nfJDvrnDQ+yW/PaSnOlcNz7em9iR977vWQw517znG92Cflq46E53Js57FJigUIprWauLjmM/Nc1Ftsx8zh6q1EbtLAddx0XKuDa+X0RSNXbChXYyjXafU4QR9XZiiXbzVGco3L/asxXMRQrnLtVFsjl5eKtj/6uTbqw/U/cX0DTwUg5yfqZtoAAAAASUVORK5CYII=",
      capital: " Ottawa ",
      poblacion: "337,067,011 hab",
    },
    {
      pais: "Estados Unidos",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.pngg",
      capital: "Washington",
      poblacion: "325 719 178 hab",
    },
    {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png',
      pais: 'mexico',
      capital: 'ciudad de mexico',
      poblacion: '123 982 528'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/125px-Flag_of_Antigua_and_Barbuda.svg.png',
      pais: 'Antigua y Barbuda',
      capital: 'Saint John’s',
      poblacion: '100,963'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/125px-Flag_of_the_Bahamas.svg.png',
      pais: 'Bahamas',
      capital: 'Nassau',
      poblacion: '391,232'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/125px-Flag_of_Barbados.svg.png',
      pais: 'Barbados',
      capital: 'Bridgetown',
      poblacion: '391,232'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/125px-Flag_of_Belize.svg.png',
      pais: 'Belice',
      capital: 'Belmopan',
      poblacion: '398,050'
  },
  {
  
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png',
      pais: 'Costa Rica',
      capital: 'San José',
      poblacion: '4,857,274'
  },
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/125px-Flag_of_Cuba.svg.png',
      pais: 'Cuba',
      capital: 'La Habana',
      poblacion: '11,221,060'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/125px-Flag_of_Dominica.svg.png',
      pais: 'Dominica',
      capital: 'Roseau',
      poblacion: '73,543'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/125px-Flag_of_El_Salvador.svg.png',
      pais: 'El Salvador',
      capital: 'San Salvado',
      poblacion: '6,344,722'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/600px-Flag_of_Grenada.svg.png',
      pais: 'Granada',
      capital: 'San Jorge',
      poblacion: '107,317'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/125px-Flag_of_Guatemala.svg.png',
      pais: 'Guatemala',
      capital: 'Ciudad de Guatemala',
      poblacion: '17,263,239'
  },
  {
  
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/125px-Flag_of_Haiti.svg.png',
      pais: 'Haití',
      capital: 'Puerto Príncipe' ,
      poblacion: '10,847,334'
  },
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Flag_of_Honduras.svg/125px-Flag_of_Honduras.svg.png',
      pais: 'Honduras',
      capital: 'Tegucigalpa',
      poblacion: '9,112,867'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/125px-Flag_of_Jamaica.svg.png',
      pais: 'Jamaica',
      capital: 'Kingston',
      poblacion: '2,890,299'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/125px-Flag_of_Nicaragua.svg.png',
      pais: 'Nicaragua',
      capital: 'Managua',
      poblacion: '6,167,237'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/125px-Flag_of_Panama.svg.png',
      pais: 'Panamá',
      capital: 'Ciudad de Panamá',
      poblacion: '4,034,119'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/125px-Flag_of_Puerto_Rico.svg.png',
      pais: 'Puerto Rico',
      capital: 'San Juan',
      poblacion: '3,195,153'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/125px-Flag_of_the_Dominican_Republic.svg.png',
      pais: 'República Dominicana',
      capital: 'Santo Domingo',
      poblacion: '10,735,896 ha'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/125px-Flag_of_Saint_Kitts_and_Nevis.svg.png',
      pais: 'San Cristóbal y Nieves',
      capital: 'Basseterre',
      poblacion: '54,821 ha'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/125px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png',
      pais: 'San Vicente y Granadina',
      capital: 'Kingstown',
      poblacion: '109,643['
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/125px-Flag_of_Saint_Lucia.svg.png',
      pais: 'Santa Lucía',
      capital: 'Castries',
      poblacion: '178,015 ha'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/125px-Flag_of_Trinidad_and_Tobago.svg.png',
      pais: 'Trinidad y Tobago',
      capital: 'Puerto España',
      poblacion: '1,359,193 ha'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png',
      pais: 'Argentina',
      capital: 'Buenos Aires',
      poblacion: '43,847,430 ha'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/125px-Flag_of_Bolivia.svg.png',
      pais: 'Bolivia',
      capital: 'La Paz',
      poblacion: '11,428,245 ha'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/125px-Flag_of_Chile.svg.png',
      pais: 'Chile',
      capital: 'Santiago',
      poblacion: '17,574,003'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/125px-Flag_of_Colombia.svg.png',
      pais: 'Colombia',
      capital: 'Bogotá',
      poblacion: '49,996,445'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png',
      pais: 'Ecuador',
      capital: 'Quito',
      poblacion: '16,385,068'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/125px-Flag_of_Guyana.svg.png',
      pais: 'Guyana',
      capital: 'Georgetown',
      poblacion: '783,769'
  },
  {
  
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/100px-Flag_of_France.svg.png',
      pais: 'Guayana Francesa',
      capital: 'Cayena',
      poblacion: '282 731'
  },
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/125px-Flag_of_Paraguay.svg.png',
      pais: 'Paraguay',
      capital: 'Asunción',
      poblacion: '7 152 703'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/125px-Flag_of_Peru.svg.png',
      pais: 'Perú',
      capital: 'Lima',
      poblacion: '32 162 184'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/125px-Flag_of_Suriname.svg.png',
      pais: 'Surinam',
      capital: 'Paramaribo',
      poblacion: '558 368'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png',
      pais: 'Uruguay',
      capital: 'Montevideo',
      poblacion: '3 519 014'
  },
  
  {
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/125px-Flag_of_Venezuela.svg.png',
      pais: 'Venezuela',
      capital: 'Caracas',
      poblacion: '31 828 000'
  },
  
  ]

  constructor() {

  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
