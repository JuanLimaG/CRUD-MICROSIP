import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloWSService } from '../../Servicios/articulo-ws.service';
import { Articulo } from '../../Entidad/Articulo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent implements OnInit{

  constructor(private router: Router, private service : ArticuloWSService){}

  ngOnInit(): void {
    this.buscar();
  }

  articulo : Articulo = new Articulo;

  buscar(){
    let idArticulo =localStorage.getItem("id");
    this.articulo.idArticulo=Number(idArticulo);
    this.service.buscarArti(this.articulo).subscribe(data=>{
      this.articulo=data
    });
  }

  eliminar(){
    this.service.eliminarArti(this.articulo).subscribe(data=>{
      alert("se elimino correctamente");
      this.router.navigate(['listar']);
    });
  }



}
