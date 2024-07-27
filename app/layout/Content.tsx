import "./style.css";

export default function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="content">
      <div className="border-2 border-gray-600 m-2 p-2">{children}</div>
    </div>
  );
}
