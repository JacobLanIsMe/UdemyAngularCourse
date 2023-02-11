import { ShoppingListService } from './shopping-list.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../@shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe("A Test1 Recipe", "This is simply a test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",[
      new Ingredient("Meat", 1),
      new Ingredient("French Fries", 20)
    ]),
    new Recipe("A Test2 Recipe", "This is simply a test", "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg", [
      new Ingredient("Buns", 2),
      new Ingredient("Meat", 1)
    ]),
  ];
  getRecipes(){
    return this.recipes.slice();
  }
  recipeSelected = new EventEmitter<Recipe>();

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(index: number){
    return this.recipes[index];
  }
}
