import { createFeatureSelector, createSelector } from "@ngrx/store";

export const taskFeatureSelector= createFeatureSelector('tasks');

export const TaskSelector= createSelector(
    taskFeatureSelector,
    (tasks)=> tasks
)

