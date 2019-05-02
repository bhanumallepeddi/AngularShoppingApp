import { Ingredient } from '../shared/ingedient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3)
  ];

  ingridentsChanged = new EventEmitter<Ingredient[]>();

  getIngridents() {
    return this.ingredients.slice();
  }

  addIngrident(ingrident: Ingredient) {
   this.ingredients.push(ingrident);
   this.ingridentsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
   this.ingredients.push(...ingredients);
   this.ingridentsChanged.emit(this.ingredients.slice());
  }
}
