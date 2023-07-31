import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import * as TaskActions from '../store/task.actions';
import { Task} from '../models/task';
import { toCSV } from '../util/csv-util';
import { Store} from '@ngrx/store';
import { saveAs} from 'file-saver';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private store: Store) {}

  setDataInLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TaskActions.createTask),
        tap((action) => {
            const data = JSON.parse(localStorage.getItem('data')) || [];
            const {type, ...rest}=action;
            let TaskArray=[...data, rest];
          localStorage.setItem('data', JSON.stringify(TaskArray));
        })
      ),
    { dispatch: false }
  );
  updateTaskToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TaskActions.editTask),
        tap((action) => {
          const{type, ...updatedTask}=action;
          console.log(updatedTask);
          const tasksData = localStorage.getItem('data');
          let tasks: Task[] = [];
          if (tasksData) {
            tasks = JSON.parse(tasksData);
          }
          const taskIndex = tasks.findIndex((task) => task.id == updatedTask.id);
          console.log(taskIndex);
          if (taskIndex !== -1) {
            tasks[taskIndex] = updatedTask;
            localStorage.setItem('data', JSON.stringify(tasks));
          }
        })
      ),
    { dispatch: false }
  );
  deleteTaskToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TaskActions.deleteTask),
        tap((action) => {
          const{type, ...deltedTask}=action;
          console.log(deltedTask);
          const tasksData = localStorage.getItem('data');
          let tasks: Task[] = [];
          if (tasksData) {
            tasks = JSON.parse(tasksData);
          }
          const newTasks=tasks.filter((t)=>t.id!=deltedTask.id);
          localStorage.setItem('data', JSON.stringify(newTasks));
        })
      ),
    { dispatch: false }
  );
  exportToCSVEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TaskActions.exportToCSV),
        tap((action) => {
          const csvData = toCSV(action.data);
          const blob = new Blob([csvData], { type: 'text/csv' });
          saveAs(blob, action.fileName);
        })
      ),
    { dispatch: false }
  );
}
