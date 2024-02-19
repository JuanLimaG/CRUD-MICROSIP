import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MICROSIP';

  constructor(private router : Router){} 

 listar(){
  this.router.navigate(['listarC']);
 }

  nuevo(){
    this.router.navigate(['guardarC']);
  }

  editar(){
    this.router.navigate(['editarC']);
  }

  eliminar(){
    this.router.navigate(['eliminarC'])
  }
}
