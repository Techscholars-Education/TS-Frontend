import { AuthContextProvider } from "@/components/auth-provider";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import GoogleProvider from "@/components/google-provider";
export const metadata = {
  title: "Techscholars | Best online Educational Platform for Students",
  description:
    "India's Best Education Platform | Crack competetive exams with best strategies, study material, test series and many more. Student's No.1 choice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        <NextTopLoader color="#0079FC" height={6} />
        <GoogleProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </GoogleProvider>
      </body>
    </html>
  );
}
