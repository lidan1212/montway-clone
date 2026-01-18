import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Olympic Auto Transport | Fast & Reliable Nationwide Car Shipping",
  description: "Read real customer reviews for Olympic Auto Transport, one of the top-rated car transport companies in the industry. Get an instant quote today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
