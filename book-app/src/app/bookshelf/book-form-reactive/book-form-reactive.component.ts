import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-book-form-reactive',
  templateUrl: './book-form-reactive.component.html',
  styleUrls: ['./book-form-reactive.component.css']
})
export class BookFormReactiveComponent implements OnInit {
  hasFormBeenSubmitted = false
  reactiveForm: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      genre: new FormControl("mystery", Validators.required)
    })
  }

  onFormSubmit() {
    console.log("Form submitted!")
    console.log(this.reactiveForm)

    this.hasFormBeenSubmitted = true

    setTimeout(() => {
      this.reactiveForm.reset()
      this.hasFormBeenSubmitted = false;
    }, 5000)
  }

}
