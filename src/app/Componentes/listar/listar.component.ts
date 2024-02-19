import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticuloWSService } from '../../Servicios/articulo-ws.service';
import { Articulo } from '../../Entidad/Articulo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

  constructor(private router : Router, private service : ArticuloWSService){}

  ngOnInit(): void {
    this.listar();
  }

  articulo !: Articulo[];

  listar(){
    this.service.listarArti().subscribe(data =>{
     this.articulo= data;
     console.log("Lista de Articulos:"+JSON.stringify(data));
    });
   }

   editar(articulo : Articulo){
    localStorage.setItem("id",articulo.idArticulo.toString());
    this.router.navigate(['editarC']);
   }

   eliminar(articulo : Articulo){
    localStorage.setItem("id",articulo.idArticulo.toString());
    this.router.navigate(['eliminarC']);
      alert("ESTA SEGURO DE ELIMINAR?");
    }

   }
