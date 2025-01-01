import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoCreateComponent } from './todo-create/todo-create.component';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';



@NgModule({
  declarations: [TodoComponent, TodoCreateComponent, TodoListComponent],
  imports: [
    CommonModule
  ]
})
export class TodoModule { }
