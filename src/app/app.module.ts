import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import { TaskService } from './task.service';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'list',
        component: TasksComponent
      }
    ])
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
