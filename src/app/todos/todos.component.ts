import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  title;
  value = 0;
  message;
  todos: any[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todoList => this.todos = todoList);
  }

  setTitle() {
    new Promise(resolve => {
      resolve('¡Título!');
    }).then((val: string) => {
      this.title = val;
    });
  }

  increment() {
    setTimeout(() => {
      if (this.value < 15) {
        this.value++;
        this.message = '';
      } else {
        this.message = 'Maximum reached!';
      }
    }, 5000); // wait 5 seconds to increment the value
  }

}
