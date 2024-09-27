import { ingredients } from './../../prisma/constants';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';
import { Ingredient } from '@prisma/client';

export const getCartItemDetails = (
  pizzType: PizzaType,
  pizzaSize: PizzaSize,
  ingredients: Ingredient[]
): string => {
  const details = [];
  if (pizzaSize && pizzType) {
    const typeName = mapPizzaType[pizzType];
    details.push(`${typeName} ${pizzaSize} см`);
  }
  if (ingredients) {
    details.push(...ingredients.map((ingredient) => ingredient.name));
  }
  return details.join(', ');
};
