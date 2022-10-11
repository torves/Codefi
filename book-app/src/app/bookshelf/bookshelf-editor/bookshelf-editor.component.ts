import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-bookshelf-editor',
  templateUrl: './bookshelf-editor.component.html',
  styleUrls: ['./bookshelf-editor.component.css']
})
export class BookshelfEditorComponent implements OnInit {
  idx: number = 0;
  isEditMode = false;


  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idx = Number(params['id'])
      this.isEditMode = params["id"] != null;
      console.log("%c isEditMode: ", "color: red," ,this.isEditMode);
    })
  }

}
