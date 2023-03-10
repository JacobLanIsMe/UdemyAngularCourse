import { RecipeService } from './../../@services/recipe.service';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService){}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  
  recipes?: Recipe[];
  
}
