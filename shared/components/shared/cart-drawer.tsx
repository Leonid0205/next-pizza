'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/components/ui/sheet';
import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
import { getCartItemDetails } from '@/shared/lib/get-cart-item-details';

interface Props {
  className?: string;
}
export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">3 товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="-mx-6 mt-5 overflow-auto flex-1">
            <div className="mb-2">
              <CartDrawerItem
                id={1}
                imageUrl={
                  'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp'
                }
                details={getCartItemDetails(2, 30, [
                  { name: 'цыпленок' },
                  { name: 'картофель' },
                ])}
                name={'Чоризо фреш'}
                price={419}
                quantity={1}
                // onClickCountButton={(type) =>
                //   onClickCountButton(item.id, item.quantity, type)
                // }
                // onClickRemove={() => removeCartItem(item.id)}
              />
            </div>
            <div className="mb-2">
              <CartDrawerItem
                id={1}
                imageUrl={
                  'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp'
                }
                details={getCartItemDetails(2, 30, [
                  { name: 'цыпленок' },
                  { name: 'картофель' },
                ])}
                name={'Чоризо фреш'}
                price={419}
                quantity={1}
                // onClickCountButton={(type) =>
                //   onClickCountButton(item.id, item.quantity, type)
                // }
                // onClickRemove={() => removeCartItem(item.id)}
              />
            </div>
          </div>
          <SheetFooter className="-mx-6 bg-white p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>

                <span className="font-bold text-lg">500 ₽</span>
              </div>
              <Link href="/checkout">
                <Button
                  type="submit"
                  className="w-full h-12 text-base"
                >
                  Оформить заказ
                  <ArrowRight className="w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
