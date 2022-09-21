import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a test.', 'https://dailynorthwestern.com/wp-content/uploads/2022/05/summerlunch-Gemma-DeCetra.png'),
    new Recipe('Test Recipe', 'This is a test.', 'https://dailynorthwestern.com/wp-content/uploads/2022/05/summerlunch-Gemma-DeCetra.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
