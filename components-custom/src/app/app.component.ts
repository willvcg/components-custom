import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadTable, Options, TableComponent } from "./components/table/table.component";

export interface User{
  nombre: string;
  email: string;
  rol: string;
}

export interface TableRow {
  id: number;
  name: string;
  age: number;
  email: string;
}

const Arrayusuarios: User[] = [
  {
    nombre: "usuario1",
    email: "usuario1@example.com",
    rol: "admin"
  },
  {
    nombre: "usuario2",
    email: "usuario2@example.com",
    rol: "usuario"
  },
  {
    nombre: "usuario3",
    email: "usuario3@example.com",
    rol: "usuario"
  }
]

export const sampleData: TableRow[] = [
  { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", age: 35, email: "alice@example.com" },
  { id: 4, name: "Bob Brown", age: 40, email: "bob@example.com" },
  { id: 5, name: "Eve Wilson", age: 28, email: "eve@example.com" }
];

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TableComponent]
})
export class AppComponent {
  title = 'components-custom';
  // headArray = signal<Options>({'nombre': 'Nombre', 'email': 'Email', 'rol': 'Rol'})
  headArray = signal<HeadTable[]>([
    {head: 'Nombre', fieldName: 'nombre'},
    {head: 'Email', fieldName: 'email'}, 
    {head: 'Rol', fieldName: 'rol'}
  ])
  gridArray = signal<User[]>(Arrayusuarios)


  // headTable = signal<Options>({'id': 'Id', 'name': 'Name', 'age': 'Age', 'email': 'Email'})
  headTable = signal<HeadTable[]>([
    {head: 'Id', fieldName: 'id'},
    {head: 'Name', fieldName: 'name'}, 
    {head: 'Age', fieldName: 'age'},
    {head: 'Email', fieldName: 'email'}
  ])
  dataTable = signal<TableRow[]>(sampleData)
}
