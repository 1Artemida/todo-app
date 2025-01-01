import { Component, OnInit } from '@angular/core';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'
import { Task, TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCreateComponent, TodoListComponent, MatCardModule, MatIconModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.tasks = this.todoService.getTasks();
  }

  addTask(name: string) {
    this.todoService.addTask(name);
    this.loadTasks();
  }

  deleteTask(task: Task) {
    this.todoService.deleteTask(task);
    this.loadTasks();
  }

  toggleTask(task: Task) {
    this.todoService.updateTaskStatus(task, !task.completed);
    this.loadTasks();
  }

  clearCompleted() {
    this.todoService.clearCompleted();
    this.loadTasks();
  }
}
