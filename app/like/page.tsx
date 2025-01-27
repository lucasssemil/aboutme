import { CardCustom } from "../component/Card";
import { CardLike1, CardLike2, CardLike3 } from "../utils/static";

export default function Like() {
  return (
    <div className="page bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg- ">
      <CardCustom content={CardLike1.content} color={CardLike1.color} />
      <CardCustom content={CardLike2.content} color={CardLike2.color} />
      <CardCustom content={CardLike3.content} color={CardLike3.color} />
    </div>
  );
}
