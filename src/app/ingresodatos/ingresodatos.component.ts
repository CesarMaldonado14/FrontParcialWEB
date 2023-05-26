import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-ingresodatos',
  templateUrl: './ingresodatos.component.html',
  styleUrls: ['./ingresodatos.component.css']
})
export class IngresodatosComponent {

  titulo: string = "";
  referencia: string = "";
  autor: string ="";
  precio: number = 0;
  ubicacion: string = "";

  constructor(private http: HttpClient) { }

  submitForm() {
    const book = {
      titulo: this.titulo,
      referencia: this.referencia,
      autor: this.autor,
      precio: this.precio,
      ubicacion: this.ubicacion
    };

    this.http.post(`http://localhost:8080/Add/Libro?titulo=${this.titulo}&referencia=${this.referencia}&autor=${this.autor}&precio=${this.precio}&ubicacion=${this.ubicacion}`, book)
      .subscribe(response => {
        console.log(response);
      });
  }

}
