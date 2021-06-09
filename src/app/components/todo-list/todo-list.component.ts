import { Component, OnInit } from '@angular/core';

import { v4 as id } from 'uuid';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }


// Mock Data
todoList: any [] = [
  {
    id: id().slice(0, 3),
    title: "eat",
    complete: true
  },
  {
    id: id().slice(0, 3),
    title: "drink",
    complete: true
  },
  {
    id: id().slice(0, 3),
    title: "Chow",
    complete: true
  },
  {
    id: id().slice(0, 3),
    title: "Sleep",
    complete: true
  },
  {
    id: id().slice(0, 3),
    title: "Listen to music",
    complete: true
  },
  {
    id: id().slice(0, 3),
    title: "Finish the food",
    complete: false
  },
  {
    id: id().slice(0, 3),
    title: "Excrete the food",
    complete: true
  }
]


  ngOnInit(): void {
  }

}
