export interface Ingredient {
  itemName: string;
  itemQuantity: number;
}

export class IngredientList {
  ingredients: Ingredient[];

  constructor(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  add(otherList: IngredientList): IngredientList {
    if (otherList !== undefined) {
      for (const item of otherList.ingredients) {
        const existingItem = this.ingredients.find(element => element.itemName === item.itemName);
        if (existingItem === undefined) {
          this.ingredients.push(item);
        } else {
          existingItem.itemQuantity += item.itemQuantity;
        }
      }
    }
    return this;
  }
}
