import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe('School Lunch',
    //         'Standard school lunch with all the trimmings.',
    //         'https://dailynorthwestern.com/wp-content/uploads/2022/05/summerlunch-Gemma-DeCetra.png',
    //         [
    //             new Ingredient('premade hamburger', 1),
    //             new Ingredient('tater tot', 12),
    //             new Ingredient('orange', 1),
    //             new Ingredient('milk', 1),
    //             new Ingredient('vegetable stick', 5)
    //         ]),
    //     new Recipe('Baked Avocado',
    //         'Careful or you might not be able to buy a house.',
    //         'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg',
    //         [
    //             new Ingredient('avocado', 2),
    //             new Ingredient('egg', 4),
    //             new Ingredient('bacon', 6),
    //             new Ingredient('chives', 2)
    //         ])
    // ];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}