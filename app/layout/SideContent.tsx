"use client";

import { usePathname } from "next/navigation";
import "./style.css";

export const SideContent: React.FC = () => {
  const path = usePathname();
  const colorbg = ["!bg-red-800", "!bg-blue-800", "!bg-green-800"];
  let number = 0;
  if (path.includes("/")) number = 0;
  if (path.includes("/tech")) number = 1;
  if (path.includes("/like")) number = 2;
  return (
    <div className={`side-content ${colorbg[number]}`}>
      <div
        className={`side-inside  ${
          colorbg[number === 2 ? number - 1 : number + 1]
        }`}
      >
        <div
          className={`side-inside ${
            colorbg[number === 1 ? number - 1 : number]
          }`}
        >
          <div
            className={`side-inside ${
              colorbg[number === 0 ? number + 2 : number - 1]
            }`}
          ></div>
        </div>
      </div>{" "}
    </div>
  );
};
