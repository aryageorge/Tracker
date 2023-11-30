import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: any[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(task: any) {
    this.tasks.push(task);
  }

  updateTask(index: number, updatedTask: any) {
    this.tasks[index] = { ...updatedTask };
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
