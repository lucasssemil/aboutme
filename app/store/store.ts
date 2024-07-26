import { create } from "zustand";

export type CartStore = {
  count: number;
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  count: 0,
  items: [],
  addItem: (item: string) =>
    set((state: CartStore) => ({
      items: [...state.items, item],
      count: state.count++,
    })),
  removeItem: (item: string) =>
    set((state: CartStore) => ({
      items: state.items.filter((i) => i !== item),
      count: state.count--,
    })),
}));
