import { Component, computed, input, signal } from '@angular/core';
import { SafeValue } from '@angular/platform-browser';

export interface Usuario {
  nombre: string;
  email: string;
  rol: string;
}

export interface HeadTable {
  head: string;
  fieldName: string;
}

export type CustomItem<T = Options> = Record<Extract<keyof T, string>, any> & RecordOptions

export type Options = Record<string , string>

export type RecordOptions = {
  /** Opciones para el collapse */
  collapse?: CollapseOptions
  /** Clase CSS personalizada de la fila */
  rowClass?: string
  /** Contenido HTML personalizado */
  innerHtml?: string
  /** Segundo contendido HTML personalizado */
  innerHtml2?: string | SafeValue
  /** Clase personalizada para cada columna de cada registro. Por orden */
  classes?: string[]
}

export type CollapseOptions = {
  /** HTML */
  inner: string,
  class?: string,
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  headArray = input.required<HeadTable[]>()
  gridArray = input.required<CustomItem[]>()
  
  /** Opciones pasadas e options (key: value) */
  // protected op = computed(()=> {
  //   const headArray = this.headArray()
  //   const objects = Object.entries(headArray)
  //   return objects
  // })
}
