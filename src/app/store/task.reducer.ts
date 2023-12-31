import { createReducer, on } from '@ngrx/store';
import { Task } from '../models/task';
import * as TaskActions from '../store/task.actions';



export const initialState: Task[] =[
    // {
    //     id: 0,
    //     title: "Meditate",
    //     summary: "Meditate in the evening, at cricket Stadium.",
    //     priority: "Medium",
    //     dueDate: "2023-07-13",
    //     createdOn: "Fri Jul 28 2023 17:34:39 GMT+0530 (India Standard Time)",
    //     status: "In-Progress"
    // },

    // {
    //     id: 1,
    //     title: "Training",
    //     summary: "Training at the Gym.",
    //     priority: "High",
    //     dueDate: "2023-09-13",
    //     createdOn: "Fri Jul 28 2023 17:34:39 GMT+0530 (India Standard Time)",
    //     status: "To-do"
    // },
    // {
    //     id: 2,
    //     title: "Runing",
    //     summary: "Have to Run for 5km at 5 o'clock.",
    //     priority: "Low",
    //     dueDate: "2023-08-23",
    //     createdOn: "Fri Jul 28 2023 17:34:39 GMT+0530 (India Standard Time)",
    //     status: "Completed"
    // },
];

export const TaskReducer= createReducer(
    initialState,
    on(TaskActions.createTask, (state, task)=>{
        return [...state, task];
    }),
    on(TaskActions.updateTask, (_,{tasks})=>{
        return [...tasks];
    }),
    on(TaskActions.editTask, (state, task)=>{
        let taskIndex=state.findIndex((t)=>t.id == task.id);
        var newTasks=[...state];
        if(taskIndex != -1){
            newTasks[taskIndex]=task;
        }
        return [...newTasks];
    }),
    on(TaskActions.deleteTask, (state, task)=>{
        let tasks= state.filter((t)=>t.id!=task.id);
        return [...tasks];
    }),
    on(TaskActions.sortByDueDate, (state)=>{
        let newState=[...state];
        newState.sort((a,b)=>{
            return (new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
        })
        return [...newState];
    }),
    on(TaskActions.sortByPriority, (state)=>{
        let newState=[...state];
        const sortOrder = { "High": 1, "Medium": 2, "Low": 3 };
        newState.sort((a, b) => {
            const aOrder = sortOrder[a.priority];
            const bOrder = sortOrder[b.priority];
            return aOrder - bOrder;
        });
        return [...newState];
    }),
    on(TaskActions.sortByStatus, (state)=>{
        let newState=[...state];
        const sortOrder = { "To-do": 1, "In-Progress": 2, "Completed": 3 };
        newState.sort((a, b) => {
            const aOrder = sortOrder[a.status];
            const bOrder = sortOrder[b.status];
            return aOrder - bOrder;
        });
        return [...newState];
    })
);