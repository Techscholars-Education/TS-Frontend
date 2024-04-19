import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "TechScholars | Best online Educational Platform for Students",
  description: "India's Best Education Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#FFE01B" height={6} />
        {children}
      </body>
    </html>
  );
}
