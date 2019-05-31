import { IngredientList } from './ingredient.model';

describe('IngredientList', () => {
  it('combines lists with two different items', () => {
    const list1 = new IngredientList([{ itemName: 'iron', itemQuantity: 2 }]);
    const list2 = new IngredientList([{ itemName: 'copper', itemQuantity: 1 }]);
    list1.add(list2);
    expect(list1.ingredients.length).toBe(2);
    expect(list1.ingredients[0].itemName).toBe('iron');
    expect(list1.ingredients[0].itemQuantity).toBe(2);
    expect(list1.ingredients[1].itemName).toBe('copper');
    expect(list1.ingredients[1].itemQuantity).toBe(1);
  });

  it('adds the quantities of ingredients with the same name together', () => {
    const list1 = new IngredientList([{ itemName: 'iron', itemQuantity: 2 }]);
    const list2 = new IngredientList([{ itemName: 'iron', itemQuantity: 3 }]);
    list1.add(list2);
    expect(list1.ingredients.length).toBe(1);
    expect(list1.ingredients[0].itemName).toBe('iron');
    expect(list1.ingredients[0].itemQuantity).toBe(5);
  });

  it('does not change the list when provided an empty list', () => {
    const list1 = new IngredientList([{ itemName: 'iron', itemQuantity: 2 }]);
    list1.add(new IngredientList([]));
    expect(list1.ingredients.length).toBe(1);
    expect(list1.ingredients[0].itemName).toBe('iron');
    expect(list1.ingredients[0].itemQuantity).toBe(2);
  });
});
