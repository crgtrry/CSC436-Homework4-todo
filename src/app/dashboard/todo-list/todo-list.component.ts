import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { ToDo, DueDate } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todos: ToDo[];
  constructor(public service: TodoService) { }

  getTodos() {
    this.service.getTodos();
  }
  ngOnInit() {
    this.service.addTodo({description: 'Complete Homework 4', dueDate: DueDate.urgent});
    this.service.addTodo({description: 'Complete Part 1', dueDate: DueDate.days});
    this.service.addTodo({description: 'Complete Part 2', dueDate: DueDate.week});
    this.service.addTodo({description: 'Complete Part 3', dueDate: DueDate.week});
    this.todos = this.service.getTodos();
  }

}
