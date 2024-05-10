import { Poppins } from "next/font/google";
import "../globals.css";
import { FloatingNav } from "@/modules/layout/templates/nav";
import Footer from "@/modules/layout/templates/footer/index";
import { FaHeart, FaHome, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Only education",
  description: "Generated by create next app",
};
const navItems = [
  {
    name: "Skill test",
    link: "/",
    icon: <FaHome className="h-4 w-4 text-neutral-500 " />,
  },
  {
    name: "Personality",
    link: "/about",
    icon: <FaUser className="h-4 w-4 text-neutral-500 " />,
  },
  {
    name: "Aptitude",
    link: "/contact",
    icon: <FaMessage className="h-4 w-4 text-neutral-500 " />,
  },
  {
    name: "Favourites",
    link: "/favourite",
    icon: <FaHeart className="h-4 w-4 text-neutral-500 " />,
  },
];
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative  ${poppins.className}`}>
        <FloatingNav navItems={navItems} />
        <div className="rounded-b-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
