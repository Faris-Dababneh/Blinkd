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
        <body>
          <main className={`${inter.className} text-txt w-full h-full overflow-auto`}>
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

// git add .
// git commit -m "Message"
// git push
