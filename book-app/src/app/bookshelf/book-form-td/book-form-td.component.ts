import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-form-td',
  templateUrl: './book-form-td.component.html',
  styleUrls: ['./book-form-td.component.css']
})
export class BookFormTdComponent implements OnInit {
  hasFormBeenSubmitted = false;
  bookDetails = {
    title: "",
    author: "",
    genre: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(formObj: NgForm) {
    console.log("Form submitted!")
    console.log(formObj)

    this.hasFormBeenSubmitted = true

    this.bookDetails.title = formObj.value.title
    this.bookDetails.author = formObj.value.author
    this.bookDetails.genre = formObj.value.genre

    formObj.reset()
  }

}
