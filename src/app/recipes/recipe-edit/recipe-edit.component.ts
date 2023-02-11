import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  index?: number;
  editModel = false;
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.editModel = params['index'] != null;
      }
    )
  }

}
