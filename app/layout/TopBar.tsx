"use client";

import { useRouter } from "next/navigation";
import "./style.css";

export const TopBar: React.FC = () => {
  const router = useRouter();
  const navigateTo = (nav: string) => {
    router.push(`/${nav}`);
  };
  return (
    <div className="sm:w-screen">
      <div className="div-topBar ">
        <button className="px-5" onClick={() => navigateTo("")}>
          About Me
        </button>
        <button className="px-5" onClick={() => navigateTo("tech")}>
          Tech
        </button>
        <button className="px-5" onClick={() => navigateTo("like")}>
          Likes
        </button>
      </div>
    </div>
  );
};
