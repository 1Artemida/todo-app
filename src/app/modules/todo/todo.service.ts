import { Injectable } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  tasks: Task[] = [];

  addTask(name: string) {
    this.tasks.push({ name, completed: false });
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  clearCompleted() {
    this.tasks = this.tasks.filter(t => !t.completed);
  }

  getTasks() {
    return this.tasks;
  }

  updateTaskStatus(task: Task, status: boolean) {
    const taskToUpdate = this.tasks.find(t => t === task);
    if (taskToUpdate) {
      taskToUpdate.completed = status;
    }
  }
}
