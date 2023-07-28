import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Task} from '../models/task';

export const taskFeatureSelector= createFeatureSelector<Task[]>('tasks');

export const TaskSelector= createSelector(  
    taskFeatureSelector,
    (state:Task[])=> state
)

