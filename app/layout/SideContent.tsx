"use client";

import { usePathname } from "next/navigation";
import "./style.css";

export const SideContent: React.FC = () => {
  const path = usePathname();
  console.log(path);
  let colorbg;
  if (path.includes("/")) colorbg = "!bg-red-200";
  if (path.includes("/tech")) colorbg = "!bg-blue-200";
  if (path.includes("/like")) colorbg = "!bg-green-200";
  return <div className={`side-content ${colorbg}`}> </div>;
};
