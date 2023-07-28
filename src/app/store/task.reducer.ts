import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task';
import * as TaskActions from '../store/task.actions';



export const initialState: Task[] =[];

export const TaskReducer= createReducer(
    initialState,
    on(TaskActions.createTask, (state, task)=>{
        return [...state, task];
    }),
    on(TaskActions.editTask, (state, task)=>{
        let taskIndex=state.findIndex((t)=>t.id == task.id);
        if(taskIndex != -1){
            state[taskIndex]=task;
        }
        return [...state];
    }),
    on(TaskActions.editTask, (state, task)=>{
        let taskIndex=state.findIndex((t)=>t.id == task.id);
        if(taskIndex != -1){
            state[taskIndex]=task;
        }
        return [...state];
    }),
    on(TaskActions.deleteTask, (state, task)=>{
        let tasks= state.filter((t)=>t.id!=task.id);
        return [...tasks];
    })
);