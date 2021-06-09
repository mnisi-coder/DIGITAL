import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { v4 as id } from 'uuid';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

	// declaration
	titleName:string;

	

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

	

	todoForm: any = new FormGroup({
		title: new FormControl('')
	})

	ngOnInit(): void {}

	submit(){
		let listItem = {
			id: id().slice(0, 3),
			title: this.titleName,
			complete: false
		};



		
		console.log("this.todoForm.value");
		this.todoList.push(listItem)
		this.titleName = '';
	}


	delete(itemIndex:any){
//console.log(itemIndex)
		this.todoList.splice(itemIndex,1)
		
	}

	updateStatus(itemIndex:any)
	{
		
		this.todoList[itemIndex].complete = true;
		console.log(this.todoList[itemIndex].complete )
	}

	updateStatusC(itemIndex:any)
	{
		this.todoList[itemIndex].complete = false;

		console.log(this.todoList[itemIndex].complete )
	}

	// showModal used to show and hide modal
	showModal : boolean =false;
	name:string;
	model2: any = {}; 
	indexPoint:number;


	show(itemIndex:any){
		this.showModal =!this.showModal; 

		this.model2.name=this.todoList[itemIndex].title;
		this.indexPoint = itemIndex;
		console.log(this.model2.name)
	}

	hide(){
	  this.showModal = false;
	}



	

	updateButton(nameOfItem:any,itemIndex:any)
	{
		this.todoList[itemIndex].title = nameOfItem;
		this.model2.name ="";
	}
}


