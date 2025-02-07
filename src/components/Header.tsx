import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavBar/NavLink";
import NavLinkFilled from "./NavBar/NavLinkFilled";
import TPGLogo from "./base/TPGLogo";

const NAVLINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Events",
    href: "/events",
  },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navMenuDisplay = isNavOpen ? "flex" : "hidden";

  return (
    <header className="flex flex-wrap items-center justify-center bg-[#052014]">
      <div className="container mx-60 flex flex-wrap items-center justify-between py-4">
        <TPGLogo />
        <nav className={`flex items-center`} id="NavBar">
          <ul className="flex flex-row items-center gap-12">
            {NAVLINKS.map((link) => (
              <NavLink key={`NAVLINK-${link.name}`} {...link} />
            ))}
            <NavLinkFilled name="Be a Devskolar" href="/register" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
