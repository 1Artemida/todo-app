import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Task } from '../todo.interfaces';
import { CommonModule } from '@angular/common';
import { TruncateTooltipPipe } from '../pipes/truncate-tooltip.pipe';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ItemsLeftPipe } from '../pipes/items-left.pipe';
import { MatButtonModule } from '@angular/material/button';
import { FilterTasksPipe } from '../pipes/filter-tasks.pipe';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, MatListModule, MatCheckboxModule, MatTooltipModule, TruncateTooltipPipe, DragDropModule, ItemsLeftPipe, MatButtonModule, FilterTasksPipe],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  filter: 'all' | 'active' | 'completed' = 'all';
  @Input() tasks: Task[] = [];
  @Output() onToggleTask = new EventEmitter<number>();
  @Output() onClearCompleted = new EventEmitter();

  constructor() {}

  toggleTask(task: Task): void {
    this.onToggleTask.emit(task.id);
  }

  clearCompleted() {
    this.onClearCompleted.emit();
  }

  drop(event: CdkDragDrop<Task[]>): void {
    moveItemInArray(
      this.tasks,
      event.previousIndex,
      event.currentIndex
    );
  }
}
