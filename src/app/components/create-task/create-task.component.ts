import { Component } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms';
import { Store} from '@ngrx/store';
import * as TaskActions from '../../store/task.actions';
import { Task} from '../../models/task';
import { TaskSelector } from 'src/app/store/task.selector';
import { Router} from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  task: Task;
  tasks: Task[];
  date= new Date();
  minDate:string =new Date().toISOString().split('T')[0];

  constructor(private store: Store, private router: Router){}

  ngOnInit(){
    const tasksData = localStorage.getItem('data');
    if(tasksData){
      const tasks:Task[]=JSON.parse(tasksData);
      this.store.dispatch(TaskActions.updateTask({tasks:tasks}));  
    }
    this.store.select(TaskSelector).subscribe((state)=>this.tasks=state);
  }



  onSubmit(f: NgForm){
    this.task=f.value;
    let num=0;
    for(let task of this.tasks){
      if(num==task.id){
        num++;
      }
      else{
        break;
      }
    }
    this.task={
      ...this.task,
      id:num,
      createdOn:this.date.toString(),
      status:"To-do",
    };
    console.log(f.value,f.valid);
    this.store.dispatch(TaskActions.createTask(this.task));
    this.router.navigate(['/']);
  }
}
