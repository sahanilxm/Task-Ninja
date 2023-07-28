import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Task} from '../../models/task';
import { TaskSelector } from 'src/app/store/task.selector';

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
    console.log(this.tasks);
  }

  getTasks(){
    this.store.select(TaskSelector).subscribe((state)=>this.tasks=state);
  }

}
