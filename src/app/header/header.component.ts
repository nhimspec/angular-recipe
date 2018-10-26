import { Component } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
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
