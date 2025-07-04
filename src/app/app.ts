import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ListaTareasComponente } from './lista-tareas-componente/lista-tareas-componente';


@Component({
  selector: 'app-root',
  imports: [FormsModule, ListaTareasComponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Lista de Tareas';
  protected descripcion = "";
  receivedData: string = '';
  tasks: Task[] = [];

  addTask(): void {
    let id: number = this.tasks.length + 1;
    let descripcion: string = this.descripcion;
    this.tasks.push({ id, descripcion });
    this.descripcion = "";
  }


  handleChildData(data: string) {
    this.receivedData = data; // Update parent's data with data from child
  }
}

interface Task {
  id: number;
  descripcion: string;
}
