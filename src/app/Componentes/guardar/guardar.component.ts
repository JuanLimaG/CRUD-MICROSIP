import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Articulo } from '../../Entidad/Articulo';
import { Router } from '@angular/router';
import { ArticuloWSService } from '../../Servicios/articulo-ws.service';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css'
})
export class GuardarComponent{

  constructor (private router : Router,private service : ArticuloWSService){}

  articulo : Articulo= new Articulo;

  guardar(){
    this.service.guardarArti(this.articulo).subscribe(data=>{
      alert("SE GUARDO EL ARTICULO ["+this.articulo.nombre+"] CORRECTAMENTE");
      this.router.navigate(['listar']);
    });
  }

}
