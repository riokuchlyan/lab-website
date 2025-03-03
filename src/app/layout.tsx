import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import './/animations.css'; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <header style={{ width: "100%", height: "40px", backgroundColor: "rgba(51, 51, 51, 0.7)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between", position: "fixed", top: 0, left: 0, padding: "0 20px", backdropFilter: "blur(5px)", fontFamily: "'Courier New', Courier, monospace", fontWeight: "bold" }}>
          <h1 style={{ fontSize: "1.2rem" }}>Visual Computing and Augmented Intelligence Lab</h1>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ margin: "0 20px" }}><a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>HOME</a></li>
              <li style={{ margin: "0 20px" }}><a href="./people" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>PEOPLE</a></li>
              <li style={{ margin: "0 20px" }}><a href="./projects" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>PROJECTS</a></li>
              <li style={{ margin: "0 20px" }}><a href="./publications" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>PUBLICATIONS</a></li>
            </ul>
          </nav>
        </header>

        

        {children}
      </body>
    </html>
  );
}
