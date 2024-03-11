import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piyush Gogawale",
  description: "Photography portfolio of Piyush Gogawale",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container px-8 lg:px-0 ${inter.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
