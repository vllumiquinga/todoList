import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-tareas-componente',
  imports: [],
  templateUrl: './lista-tareas-componente.html',
  styleUrl: './lista-tareas-componente.css'
})
export class ListaTareasComponente {
  @Input() tareas: Task[] = [];
  @Output() dataToParent = new EventEmitter<string>();
  @Output() tareaBorrada = new EventEmitter<Task>();


  sendDataToParent(): void {
    this.dataToParent.emit('Hello from the child!');
  }

  deltask(id: number): void {
    let indice: number = this.tareas.findIndex(task => task.id === id);
    if (indice !== -1) {
      this.tareaBorrada.emit(this.tareas.splice(indice)[0]);
    }
  }  

}

interface Task {
  id: number;
  descripcion: string;
}
