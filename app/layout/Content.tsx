import "./style.css";

export default function Content({ children }: { children: React.ReactNode }) {
  return <div className="div-content">{children}</div>;
}