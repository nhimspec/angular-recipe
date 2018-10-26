import { Component } from "@angular/core";

import { DataStorageService } from "src/app/shared/data-storage.service";
import { AuthService } from "src/app/auth/auth.service";
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(
    public dataStorageService: DataStorageService,
    public authService: AuthService
  ) {}
  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((recipes: Recipe[]) => {
      console.log(recipes);
    });
  }

  onLogout() {
    this.authService.logout();
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
