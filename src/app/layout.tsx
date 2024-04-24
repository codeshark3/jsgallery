import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./_components/header";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "JSgallery",
  description: "Generated time",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
