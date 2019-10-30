import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { TodoItemComponent } from './dashboard/todo-item/todo-item.component';
import { NewTodoItemComponent } from './dashboard/new-todo-item/new-todo-item.component';
import { TodoListComponent } from './dashboard/todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoItemComponent,
    NewTodoItemComponent,
    TodoListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
