import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Task } from '../todo.interfaces';
import { CommonModule } from '@angular/common';
import { TruncateTooltipPipe } from '../pipes/truncate-tooltip.pipe';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCheckboxModule, MatTooltipModule, TruncateTooltipPipe, DragDropModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() tasks: Task[] = [];
  @Output() taskToggled = new EventEmitter<number>();
  @Output() taskReordered = new EventEmitter<Task[]>();

  toggleTask(task: Task): void {
    this.taskToggled.emit(task.id);
  }

  drop(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(
      this.tasks,
      event.previousIndex,
      event.currentIndex
    );
    console.log(event.previousIndex, event.currentIndex, this.tasks)
  }
}
