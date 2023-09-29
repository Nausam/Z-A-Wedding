import "./globals.css";
import { Dancing_Script } from "next/font/google";
import { Satisfy } from "next/font/google";
import { Courgette } from "next/font/google";
import Providers from "./providers";

// const inter = Dancing_Script({ subsets: ["latin"], weight: "400" });

// const inter = Satisfy({ subsets: ["latin"], weight: "400" });

const inter = Courgette({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Invitation",
  description: "Zameen & Afaa's Wedding Invitation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
