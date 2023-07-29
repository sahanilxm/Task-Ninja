import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { TaskReducer } from './store/task.reducer';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { HomeComponent } from './components/home/home.component';
import { NoTaskComponent } from './components/no-task/no-task.component';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './store/task.effects';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
    TaskItemComponent,
    HomeComponent,
    NoTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({"tasks" : TaskReducer}),
    FormsModule,
    EffectsModule.forRoot([DataEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
