import { RecipeService } from './../../../@services/recipe.service';
import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() recipeIndex!: number;
  constructor(private recipeService: RecipeService){}
  // onSelected(){
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }
}
