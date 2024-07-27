import { create } from "zustand";

export type CartStore = {
  stash1: string[];
  stash2: string[];
  moveStash1: (item: string) => void;
  moveStash2: (item: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  stash1: ["Apple", "Orange", "Pear", "Melon"],
  stash2: [],
  moveStash1: (item: string) => {
    if (item !== "")
      set((state: CartStore) => ({
        stash1: [...state.stash1, item],
        stash2: state.stash2.filter((i) => i !== item),
      }));
  },
  moveStash2: (item: string) => {
    if (item !== "")
      set((state: CartStore) => ({
        stash2: [...state.stash2, item],
        stash1: state.stash1.filter((i) => i !== item),
      }));
  },
}));
