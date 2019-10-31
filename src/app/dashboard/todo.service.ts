import { ToDo, DueDate } from './../models/ToDo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  toDos: ToDo[] = [];

  constructor() { }

  addTodo(todo: ToDo) {
    this.toDos.push(todo);
  }

  // tslint:disable-next-line:align
  getTodos(): ToDo[] {
    return this.toDos;
  }

  updateToDo(todo: ToDo) {
      // todo how do I identify a specific todo item
  }

  removeToDo(todo: ToDo) {
    // todo how do I identify a specific todo item
  }
}
