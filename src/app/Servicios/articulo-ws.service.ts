import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Articulo } from '../Entidad/Articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloWSService {

  urlArticulo = 'http://localhost:8017/'
  constructor(private http: HttpClient) { }

  listarArti(){
    return this.http.get<Articulo[]>(this.urlArticulo+'listar');
  }

  buscarArti(articulo : Articulo){
   return this.http.post<Articulo>(this.urlArticulo+'buscar', articulo);
  }

  guardarArti(articulo : Articulo){
   return  this.http.post<Articulo>(this.urlArticulo+'guardar', articulo);
  }

  editarArti(articulo : Articulo){
   return this.http.post<Articulo>(this.urlArticulo+'editar', articulo);
  }

  eliminarArti(articulo : Articulo){
   return this.http.post<Articulo>(this.urlArticulo+'eliminar', articulo);
  }
}
