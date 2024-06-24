import { AuthContextProvider } from "@/components/auth-provider";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import GoogleProvider from "@/components/google-provider";
export const metadata = {
  title: "TechScholars | Best online Educational Platform for Students",
  description: "India's Best Education Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <NextTopLoader color="#3572EF" height={6} />
        <GoogleProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </GoogleProvider>
      </body>
    </html>
  );
}
