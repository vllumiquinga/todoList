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

  sendDataToParent(): void {
    this.dataToParent.emit('Hello from the child!');
  }

  deltask(id: number): void {
    let indice: number = this.tareas.findIndex(task => task.id === id);
    if (indice !== -1) {
      this.tareas.splice(indice);
    }
  }  

}

interface Task {
  id: number;
  descripcion: string;
}
