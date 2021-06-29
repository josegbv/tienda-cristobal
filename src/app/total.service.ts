import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  devolver() {
    return [
      {
        codigo: 1,
        nombreProducto:"Tallarines",
        precio: 1200,
        stock: 100
      },
      {
        codigo: 2,
        nombreProducto:"Pan",
        precio: 1400,
        stock: 200
      },
      {
        codigo: 3,
        nombreProducto:"Carne",
        precio: 7000,
        stock: 50
      },
      {
        codigo: 4,
        nombreProducto:"Vino",
        precio: 7000,
        stock: 120
      },
      {
        codigo: 5,
        nombreProducto:"Arroz",
        precio: 1000,
        stock: 200
      }
    ];
  }
}

