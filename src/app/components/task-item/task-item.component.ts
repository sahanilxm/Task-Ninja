import { Component, Input} from '@angular/core';
import { Task} from '../../models/task';
import { NgForm } from '@angular/forms';
import * as TaskActions from '../../store/task.actions';
import { Store} from '@ngrx/store';
import { TaskSelector } from 'src/app/store/task.selector';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  
  @Input() task:Task;

  fullTask= false;
  edit=false;
  updatedTask: Task;
  tasks:Task[];
  status=["to-do", "in-progress", "completed"];

  onView(){
    this.fullTask= !this.fullTask;
  }

  onEdit(){
    this.edit=!this.edit;
  }

  constructor(private store: Store){}

  ngOnInit(){
    this.store.select(TaskSelector).subscribe((state)=> this.tasks=state)
  }

  onUpdate(f: NgForm){
    this.updatedTask=f.value;
    this.updatedTask={
      ...this.updatedTask,
      id:this.task.id,
      createdOn:this.task.createdOn
    };
    this.store.dispatch(TaskActions.editTask(this.updatedTask));
  }

  onDelete(){
    this.store.dispatch(TaskActions.deleteTask(this.task));
  }

}
