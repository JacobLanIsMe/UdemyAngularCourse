import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/@services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;
  index?: number;
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = +params['index'];
        this.recipe = this.recipeService.getRecipe(this.index);
      }
    )
    
  }
  onAddToShoppingList(){
    if (this.recipe != null){
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
    
  }
}
