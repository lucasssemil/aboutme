"use client";
import { CartStore, useCartStore } from "../store/store";

export default function Tech() {
  const count = useCartStore((state: CartStore) => state.count);
  return (
    <div className="p-4 w-[50vw] !bg-blue-200">
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> */}
      TECH
      {/* </div> */}
    </div>
  );
}
