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
  tasks: Array<Task>;
  date= new Date();

  constructor(private store: Store, private router: Router){}

  ngOnInit(){
    this.store.select(TaskSelector).subscribe((state)=> this.tasks=state)
  }

  onSubmit(f: NgForm){
    console.log(f.value);
    this.task=f.value;
    this.task={
      ...this.task,
      id:this.tasks.length,
      createdOn:this.date.toString(),
      status:"To-do"
    };
    this.store.dispatch(TaskActions.createTask(this.task));
    this.router.navigate(['/']);
  }
}
