import { CardCustom } from "./component/Card";
import {
  CardAboutMe1,
  CardAboutMe2,
  CardAboutMe3,
  CardAboutMe4,
  CardAboutMe5,
} from "./utils/static";

export default function Home() {
  return (
    <div className="page bg-red-800">
      <CardCustom content={CardAboutMe1.content} color={CardAboutMe1.color} />
      <a href="mailto:lucasssemil@gmail.com">
        <CardCustom content={CardAboutMe2.content} color={CardAboutMe2.color} />
      </a>
      <CardCustom content={CardAboutMe3.content} color={CardAboutMe3.color} />
      <CardCustom content={CardAboutMe4.content} color={CardAboutMe4.color} />
      <a
        href="https://www.linkedin.com/in/lucas-emil-318865235/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardCustom content={CardAboutMe5.content} color={CardAboutMe5.color} />
      </a>
      <section></section>
    </div>
  );
}
