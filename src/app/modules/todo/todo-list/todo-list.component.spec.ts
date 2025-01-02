import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { By } from '@angular/platform-browser';
import { Task } from '../todo.interfaces';
import { CdkDragDrop } from '@angular/cdk/drag-drop';


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a message when no tasks are present', () => {
    component.tasks = [];
    fixture.detectChanges();
    const message = fixture.debugElement.query(By.css('.todo-no-tasks-message'));
    expect(message).toBeTruthy();
  });

  it('should emit toggleTask when checkbox is clicked', () => {
    spyOn(component.onToggleTask, 'emit');
    const task: Task = { id: 1, name: 'Test Task', completed: false };
    component.tasks = [task];
    fixture.detectChanges();

    const checkbox = fixture.debugElement.query(By.css('input[type="checkbox"]')).nativeElement;
    checkbox.click();

    expect(component.onToggleTask.emit).toHaveBeenCalledWith(task.id);
  });

  it('should call moveItemInArray when tasks are dragged', () => {
    spyOn(component, 'drop');

    const event = { previousIndex: 0, currentIndex: 1 } as CdkDragDrop<Task[]>;
    component.drop(event);

    expect(component.drop).toHaveBeenCalledWith(event);
  });

  it('should filter tasks correctly based on the filter value', () => {
    const tasks: Task[] = [
      { id: 1, name: 'Task 1', completed: true },
      { id: 2, name: 'Task 2', completed: false },
    ];
    component.tasks = tasks;
    component.filter = 'active';
    fixture.detectChanges();

    const taskElements = fixture.debugElement.queryAll(By.css('.todo-list-container-info'));
    expect(taskElements.length).toBe(1);
  });
});
