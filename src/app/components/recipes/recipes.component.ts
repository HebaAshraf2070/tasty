import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipesList: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.authService.getreceipes().subscribe({
      next: (response) => {
        this.recipesList = response.meals;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}