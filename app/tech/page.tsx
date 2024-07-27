"use client";
import { CardCustom } from "../component/Card";
import { CartStore, useCartStore } from "../store/store";
import {
  CardPorto1,
  CardPorto2,
  CardPorto3,
  CardPorto4,
  CardPorto5,
  CardPorto6,
} from "../utils/static";

export default function Tech() {
  const stash1 = useCartStore((state: CartStore) => state.stash1);
  const stash2 = useCartStore((state: CartStore) => state.stash2);
  const moveStash1 = useCartStore((state: CartStore) => state.moveStash1);
  const moveStash2 = useCartStore((state: CartStore) => state.moveStash2);
  return (
    <div className="page sm:!flex-row !justify-between bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-gray">
      <div className="flex-col flex gap-2">
        <CardCustom content={CardPorto1.content} color={CardPorto1.color} />
        <CardCustom content={CardPorto2.content} color={CardPorto2.color} />
        <CardCustom content={CardPorto3.content} color={CardPorto3.color} />
        <a
          href="https://zustand-demo.pmnd.rs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardCustom content={CardPorto4.content} color={CardPorto4.color} />
        </a>
        <a
          href="https://flutter.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardCustom content={CardPorto5.content} color={CardPorto5.color} />
        </a>
      </div>
      <div className="flex h-fit">
        <CardCustom content={CardPorto6.content} color={CardPorto6.color} />
      </div>
      <div className="flex-col">
        <div className="flex-row">
          {stash1.map((element, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded shadow-md"
            >
              {element}
            </div>
          ))}
        </div>
        <div className="flex-row">
          <div
            className="p-4 border border-gray-200 rounded brightness-50 shadow-md  hover:brightness-75 transition"
            onClick={() =>
              moveStash1(stash2.length > 0 ? stash2[stash2.length - 1] : "")
            }
          >
            Take
          </div>
          <div
            className="p-4 border border-gray-200 brightness-50 rounded shadow-md  hover:brightness-75 transition"
            onClick={() =>
              moveStash2(stash1.length > 0 ? stash1[stash1.length - 1] : "")
            }
          >
            Send
          </div>
        </div>
        <div className="flex-row">
          {stash2.map((element, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded shadow-md"
            >
              {element}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
