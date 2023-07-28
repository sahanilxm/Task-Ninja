import { createAction,props } from "@ngrx/store";
import { Task} from '../models/task';


export const createTask=createAction('[Task] Create Task', props<Task>());
export const deleteTask= createAction('[Task] Delete Task', props<Task>());
export const editTask= createAction('[Task] Edit Task', props<Task>());

export const sortTaskByDueDate= createAction('[Task] Sort Task');
export const sortTaskByPriority= createAction('[Task] Sort Task');