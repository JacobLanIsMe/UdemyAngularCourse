import { ShoppingListService } from './../../@services/shopping-list.service';
import { Ingredient } from './../../@shared/ingredient.model';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  ingredient?: Ingredient;
  constructor(private shoppingListService: ShoppingListService){}
  @ViewChild("nameInput", {static:true}) nameInput?: ElementRef; 
  @ViewChild("amountInput", {static:true}) amountInput?: ElementRef;
  addIngredient(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput?.nativeElement.value, this.amountInput?.nativeElement.value));
  }
}
