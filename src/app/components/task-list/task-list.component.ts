import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { Task} from '../../models/task';
import { TaskSelector } from 'src/app/store/task.selector';
import * as TaskActions from '../../store/task.actions';
import { Router} from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks:Task[];

  constructor(private store: Store, private router: Router){}

  ngOnInit(): void{
    this.getTasks();
  }

  data:any;

  getTasks(){
    const tasksData = localStorage.getItem('data');
    if(tasksData){
      const tasks:Task[]=JSON.parse(tasksData);
      this.data=tasks;
      this.store.dispatch(TaskActions.updateTask({tasks:tasks}));  
    }
    this.store.select(TaskSelector).subscribe((state)=>this.tasks=state);
  }

  sortByPriority(){
    this.store.dispatch(TaskActions.sortByPriority());
  }
  
  sortByDueDate(){
    this.store.dispatch(TaskActions.sortByDueDate());
  }

  onExportToCSV() {
    const fileName = 'data.csv';
    this.store.dispatch(TaskActions.exportToCSV({ data: this.data, fileName: fileName }));
  }

  sortBy(event: Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
      switch(selectedValue){
        case 'priority':{
          this.store.dispatch(TaskActions.sortByPriority());
          break;
        }
        case 'dueDate':{
          this.store.dispatch(TaskActions.sortByDueDate());
          break;
        }
        case 'status':{
          this.store.dispatch(TaskActions.sortByStatus());
          break;
        }
        case 'none':{
          break;
        }
      }
  }

}
