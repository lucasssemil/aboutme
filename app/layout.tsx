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
        <div className="container">
          <TopBar />
          <Content children={children} />
        </div>
        <SideContent />
      </body>
    </html>
  );
}
