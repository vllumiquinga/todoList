import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Lista de Tareas';
  protected descripcion = "";
  tasks: Task[] = [];
  addTask(): void {
    let id: number = this.tasks.length + 1;
    let descripcion: string = this.descripcion;
    this.tasks.push({ id, descripcion });
    this.descripcion = "";
  }
  deltask(id: number): void {
    let indice: number = this.tasks.findIndex(task => task.id === id);
    if (indice !== -1) {
      this.tasks.splice(indice);
    }
  }
}

interface Task {
  id: number;
  descripcion: string;
}
