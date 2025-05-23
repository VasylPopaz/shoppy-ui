import { Container, CssBaseline } from "@mui/material";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Header } from "./header/header";
import { Providers } from "./providers";

import { authenticated } from "./auth/actions/authenticated";
import { logout } from "./auth/logout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shoppy",
  description: "Generated by create next app",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isAuthenticated = await authenticated();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers authenticated={isAuthenticated}>
          {" "}
          <CssBaseline />
          <Header logout={logout} />
          <Container className="py-10">{children}</Container>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
