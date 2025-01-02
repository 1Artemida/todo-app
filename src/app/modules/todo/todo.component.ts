import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TodoService } from './todo.service';
import { Task } from './todo.interfaces';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCreateComponent, TodoListComponent, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  tasks: Task[] = [{ id: Date.now(), name: '123', completed: false }];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.todoService.getTasks();
  }

  addTask(name: string) {
    this.todoService.addTask(name);
    this.loadTasks();
  }

  toggleTaskCompletion(id: number): void {
    this.todoService.toggleTaskCompletion(id);
    this.loadTasks();
  }

  clearCompleted() {
    this.todoService.clearCompleted();
    this.loadTasks()
  }
}
