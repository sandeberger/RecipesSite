import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //@ViewChild ('recipes'){static: true} recipes: ElementRef;
  //Recipe[] = [new Recipe('A test recipe', 'Good food for you','https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=970%2C546&ssl=1')];

  constructor() { }

  ngOnInit(): void {
  }

}
