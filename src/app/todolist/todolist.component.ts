import { Component, OnInit } from '@angular/core';
import {DataService, Todo} from '../shared/services/data.service';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todoList: Todo[];
  cols: any[];
  multiSortMeta: any[];
  displayDialog: boolean;
  displayMessage: string;
  loading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loading = true;
    this.displayDialog = false;
    this.dataService.getTodos().subscribe(todoList => {
      this.todoList = todoList;
      this.loading = false;
    });

    this.cols = [
      // { field: 'id', header: 'Id' },
      { field: 'title', header: 'Title' },
      { field: 'completed', header: 'Completed' }
    ];


    this.multiSortMeta = [];
    this.multiSortMeta.push({field: 'completed', order: 1});
    this.multiSortMeta.push({field: 'title', order: 1});
  }

  onRowClick(todo: Todo): void {
    console.log(todo);
    this.displayDialog = true;
    this.displayMessage = todo.title;
  }
}
