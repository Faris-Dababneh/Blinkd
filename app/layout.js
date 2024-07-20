'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import NavbarComponent from "../components/navbar/NavbarComponent";

import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.className} text-txt w-full overflow-auto`}>
          <main>
            <SessionProvider>
            <NextUIProvider>
              <NavbarComponent />
              {children}
            </NextUIProvider>
            </SessionProvider>
          </main>
        </body>
    </html>
  );
}
