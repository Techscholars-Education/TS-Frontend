import "./globals.css";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  title: "TechScholars | Best online Educational Platform for Students",
  description: "India's Best Education Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://canvasjs.com/assets/script/canvasjs.min.js"
        ></script>
      </head>
      <body>
        <NextTopLoader color="#0079FC" height={6} />
        {children}
      </body>
    </html>
  );
}
