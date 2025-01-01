import { Component, OnInit } from '@angular/core';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from './todo.service';
import { Task } from './todo.interfaces';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ItemsLeftPipe } from './pipes/items-left.pipe';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCreateComponent, TodoListComponent, MatCardModule, MatIconModule, MatButtonModule, ItemsLeftPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [];
  filter: 'all' | 'active' | 'completed' = 'all';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask(name: string) {
    // TODO: rxjs
    this.todoService.addTask(name);
    this.loadTasks();
  }

  toggleTaskCompletion(id: number): void {
    this.todoService.toggleTaskCompletion(id);
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }

  filterTasks(): Task[] {
    if (this.filter === 'active') {
      return this.tasks.filter(task => !task.completed);
    }
    if (this.filter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    return this.tasks;
  }
}
