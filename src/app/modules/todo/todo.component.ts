import { Component } from '@angular/core';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCreateComponent, TodoListComponent, MatCardModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTask: string = ''
}
