import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Terra Incognita",
  description: "it's a chatbot, but all answer is all 'bout history...",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <header className="flex items-center px-4 py-3">
              <Link href="/" className="flex items-center gap-2 w-40 h-10">
                <img src="/ti.png" alt="Velvet_logo" />
              </Link>
            </header>
            <div className="absolute top-4 right-4 z-50">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            {children}
          </body>
        </html>
      </>
    </ClerkProvider>
  );
}