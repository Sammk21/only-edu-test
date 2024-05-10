import { Poppins } from "next/font/google";
import "../globals.css";
import "../normalize.css";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.className}`}>{children}</body>
    </html>
  );
}
