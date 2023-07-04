import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get It Branded",
  description: "We do automate all of your brand's social media activities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <Suspense>
          <Nav />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
