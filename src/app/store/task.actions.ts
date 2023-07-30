import { createAction,props } from "@ngrx/store";
import { Task} from '../models/task';




export const updateTask=createAction('[Task] Update Task', props<{tasks: Task[]}>());

export const createTask=createAction('[Task] Create Task', props<Task>());
export const deleteTask= createAction('[Task] Delete Task', props<Task>());
export const editTask= createAction('[Task] Edit Task', props<Task>());

export const sortByDueDate= createAction('[Task] Sort Task By DueData');
export const sortByPriority= createAction('[Task] Sort Task By Priority');
export const sortByStatus= createAction('[Task] Sort Task By Status');


export const exportToCSV = createAction('[CSV Export] Export Data',props<{ data: any[]; fileName: string }>());