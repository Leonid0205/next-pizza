import React from 'react';
import { PizzaSize, PizzaType } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';
import { useSet } from 'react-use';
import { getAvailablePizzaSizes } from '../lib/get-available-pizza-sizes';
import { ProductItem } from '@prisma/client';

interface ReturnProps {
  size: PizzaSize;
  type: PizzaType;
  setSize: (size: PizzaSize) => void;
  setType: (type: PizzaType) => void;
  availableSizes: Variant[];
  selectedIngredients: Set<number>;
  addIngredient: (id: number) => void;
}

export const usePizzaOptions = (items: ProductItem[]): ReturnProps => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);
  const [selectedIngredients, { toggle: addIngredient }] = useSet(
    new Set<number>([])
  );
  const availableSizes = getAvailablePizzaSizes(items, type);
  console.log(availableSizes);
  React.useEffect(() => {
    const isAvaliableSize = availableSizes?.find(
      (item) => Number(item.value) === size && !item.disabled
    );
    const avaliableSize = availableSizes?.find((item) => !item.disabled);
    if (!isAvaliableSize && avaliableSize) {
      setSize(Number(avaliableSize.value) as PizzaSize);
    }
  }, [type]);
  return {
    size,
    type,
    setSize,
    setType,
    selectedIngredients,
    addIngredient,
    availableSizes,
  };
};
