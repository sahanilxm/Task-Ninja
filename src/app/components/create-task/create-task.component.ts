import { Component } from '@angular/core';
import { NgForm, NgModel} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  constructor(){}


  onSubmit(f: NgForm){
    console.log(f.value);
  }
}
