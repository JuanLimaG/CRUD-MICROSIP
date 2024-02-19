import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloWSService } from '../../Servicios/articulo-ws.service';
import { Articulo } from '../../Entidad/Articulo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent{
  
  constructor(private router : Router, private service : ArticuloWSService){}

  ngOnInit(): void {
    this.buscar();
  }

  articulo : Articulo = new Articulo;

  buscar(){
    let idArticulo = localStorage.getItem("id");
    this.articulo.idArticulo=Number(idArticulo);
    this.service.buscarArti(this.articulo).subscribe(data=>{
      this.articulo=data
    });
  }

  editar(){
    this.service.editarArti(this.articulo).subscribe(data=>{
      alert("EL ARTICULO ["+this.articulo.nombre+"] SE ACTUALIZO CORRECTAMENTE");
      this.router.navigate(['listar']);
    });
  }

}
