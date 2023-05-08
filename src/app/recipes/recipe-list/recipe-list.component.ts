import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes :Recipe[] = [
    new Recipe('Test Recipe1',"This is simply a test","https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg"),
    new Recipe('Test Recipe2',"This is simply a test2","https://static.onecms.io/wp-content/uploads/sites/43/2022/03/20/212721-Indian-Chicken-Curry-Murgh-Kari-mfs_005.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
