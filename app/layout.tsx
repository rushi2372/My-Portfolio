import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rushikesh Ramesh Sangamnere | Data Analyst & Data Scientist",
  description:
    "Portfolio of Rushikesh Ramesh Sangamnere - Data Analyst, Data Scientist, and aspiring ML/AI Engineer focused on business insights and applied machine learning.",
  keywords: [
    "Data Analyst",
    "Data Scientist",
    "Machine Learning",
    "Power BI",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "Rushikesh Ramesh Sangamnere | Data Analyst & Data Scientist",
    description:
      "Portfolio showcasing analytics, machine learning, and GenAI projects for business impact.",
    url: "https://vercel.app",
    siteName: "Rushikesh Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
