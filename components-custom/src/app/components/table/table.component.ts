import { Component, signal } from '@angular/core';

export interface Usuario {
  nombre: string;
  email: string;
  rol: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  protected usuarios = signal<Usuario[]>( [
    {nombre: 'Juan', email:'juan@example.com', rol:'Administrador'},
    {nombre: 'María', email:'maria@example.com', rol:'Editor'},
    {nombre: 'Pedro', email:'pedro@example.com', rol:'Lector'}
  ]);
}
