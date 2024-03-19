import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "TechScholars",
  description: "India's Best Education Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}