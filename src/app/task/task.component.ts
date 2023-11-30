
import { Component } from '@angular/core';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: any[] = [];
  newTask: any = {};
  editingIndex: number = -1;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask({ ...this.newTask });
    this.clearForm();
  }

  editTask(index: number) {
    this.newTask = { ...this.tasks[index] };
    this.editingIndex = index;
  }

  updateTask() {
    this.taskService.updateTask(this.editingIndex, { ...this.newTask });
    this.clearForm();
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }

  clearForm() {
    this.newTask = {};
    this.editingIndex = -1;
  }
}