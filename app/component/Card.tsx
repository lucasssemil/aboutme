import { CardData } from "../utils/static";

export const CardCustom = ({ content, color }: CardData) => {
  return (
    <div
      className={`rounded-3xl border-1 max-h-full w-fit border-gray-600 p-3 drop-shadow-md ${color}`}
    >
      <div className="rounded-xl border-2 border-white p-3">{content}</div>
    </div>
  );
};
