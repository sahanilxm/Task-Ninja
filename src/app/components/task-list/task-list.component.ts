import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Task} from '../../models/task';
import { TaskSelector } from 'src/app/store/task.selector';
import * as TaskActions from '../../store/task.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks:Task[];

  constructor(private store: Store){}

  ngOnInit(): void{
    this.getTasks();
  }

  getTasks(){
    this.store.select(TaskSelector).subscribe((state)=>this.tasks=state);
  }

  sortByPriority(){
    this.store.dispatch(TaskActions.sortByPriority());
  }
  
  sortByDueDate(){
    this.store.dispatch(TaskActions.sortByDueDate());
  }

}
