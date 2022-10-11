import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('School Lunch', 
        'Standard school lunch with all the trimmings.', 
        'https://dailynorthwestern.com/wp-content/uploads/2022/05/summerlunch-Gemma-DeCetra.png',
        [
            new Ingredient('premade hamburger', 1),
            new Ingredient('tater tot', 12), 
            new Ingredient('orange', 1),
            new Ingredient('milk', 1),
            new Ingredient('vegetable stick', 5)
        ]),
        new Recipe('Baked Avocado', 
        'Careful or you might not be able to buy a house.', 
        'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg',
        [
            new Ingredient('avocado', 2),
            new Ingredient('egg', 4),
            new Ingredient('bacon', 6),
            new Ingredient('chives', 2)
        ])
      ];

      constructor(private shoppingListService: ShoppingListService){
      }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}