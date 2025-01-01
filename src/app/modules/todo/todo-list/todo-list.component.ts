import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Task } from '../todo.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCheckboxModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskToggled = new EventEmitter<number>();

  toggleTask(task: Task): void {
    this.taskToggled.emit(task.id);
  }
}
