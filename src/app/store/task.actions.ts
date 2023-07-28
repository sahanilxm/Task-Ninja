import { createAction,props } from "@ngrx/store";
import { Task} from '../models/task';


export const createTask=createAction('[Task] Create Task', props<Task>());
export const deleteTask= createAction('[Task] Delete Task', props<Task>());
export const editTask= createAction('[Action] Edit Task', props<Task>());

