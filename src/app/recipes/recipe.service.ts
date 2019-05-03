import {EventEmitter, Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingedient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'This is simply a test recipe',
     'https://diethood.com/wp-content/uploads/2018/01/Easy-Baked-Chicken-9.jpg',
     [new Ingredient('Eggs',5),
      new Ingredient('Onions',1)
    ]),
     new Recipe('Thai cuisine', 'Delicious Thai food',
     `data:image/jpeg;base64,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`,
     [new Ingredient('Bread',6),
     new Ingredient('Milk',2)
    ])

  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipeFromId(id: number) {
   return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
