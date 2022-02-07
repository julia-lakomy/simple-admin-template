import { Component, OnInit } from '@angular/core';


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  element1?: string;
  element2?: string;
  element3?: string;
  element4?: string;
  element5?: string;
  element6?: string;
  element7?: string;
  element8?: string;
  element9?: string;
  element10?: string;
}

const ELEMENT_DATA: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , element1: "element numer 1 bardzo długi tekst bardzo długi tekst", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'  , element1: "element numer 1", element2: "element numer 2", element3: "element numer 3", element4: "element numer 4", element5: "element numer 5", element6: "element numer 6", element7: "element numer 7", element8: "element numer 8", element9: "element numer 9", element10: "element numer 10" },
];
@Component({
  selector: 'app-long-table',
  templateUrl: './long-table.component.html',
  styleUrls: ['./long-table.component.scss']
})
export class LongTableComponent implements OnInit {

  displayedColumns = ['position', 'name', 'weight', 'symbol', 'element1', 'element2', 'element3', 'element4', 'element5', 'element6', 'element7', 'element8', 'element9', 'element10'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
