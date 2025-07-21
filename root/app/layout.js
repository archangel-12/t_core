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
  title: "Velvet",
  description: "it's a chatbot, but all answer is all bout history...",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <header className="flex items-center justify-between px-4 py-3">
              <Link href="/" className="flex items-center gap-2 w-8 h-8">
                <img src="/favicon.png" alt="Velvet_logo" />
                <span className="text-base text-black font-sans">Velvet</span>
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