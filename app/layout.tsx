import "./globals.css";
import Content from "./layout/Content";
import { SideContent } from "./layout/SideContent";
import { TopBar } from "./layout/TopBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Content children={children} />
        <footer className="text-white text-sm bottom-0 fixed self-center">
          {" "}
          @Lucas.Emil2024
        </footer>
      </body>
    </html>
  );
}
