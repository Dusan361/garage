import { Component, OnInit } from '@angular/core';
import { producte } from 'src/app/producte';
import { Interfaceproducte } from '../Interfaceproducte';

@Component({
  selector: 'app-product-li',
  templateUrl: './product-li.component.html',
  styleUrls: ['./product-li.component.css']
})
export class ProductLiComponent implements OnInit {
  producte: Interfaceproducte[] = producte;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
