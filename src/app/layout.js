import Navbar from "@/components/Navigation";
import { Prompt } from "next/font/google";
import "./globals.css"; // << แก้บรรทัดนี้จาก ../ เป็น ./ (หรือ "@/app/globals.css")

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300"],
  variable: "--font-prompt",
});

export const metadata = {
  title: "Register App",
  description: "Next.js Register Form",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${prompt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}