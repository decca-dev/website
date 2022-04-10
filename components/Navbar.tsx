import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

interface NavbarOptions {
  active: NavLinks;
}

interface NavLinkOptions {
  title: string;
  href: string;
  active: NavLinks;
}

type NavLinks = "home" | "about" | "projects" | "contact" | "social";

const Navbar: FC<NavbarOptions> = ({ active }: NavbarOptions) => {
  return (
    <nav className="navbar">
      <div className="flex flex-row items-center justify-between font-semibold sm:justify-around">
        <Image src={"/assets/logo.png"} width={50} height={50} />
        <div className="mr-7 flex space-x-4 sm:mr-16 sm:space-x-6">
          <NavLink title="Home" href="/" active={active} />
          <NavLink title="About" href="/about" active={active} />
          <NavLink title="Projects" href="/projects" active={active} />
          <NavLink title="Contact" href="/contact" active={active} />
          <NavLink title="Social" href="/social" active={active} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ title, href, active }: NavLinkOptions) => {
  return (
    <h1
      className={
        active === title.toLowerCase()
          ? "text-white underline"
          : "text-gray-400"
      }
    >
      <Link href={href}>{title}</Link>
    </h1>
  );
};

export default Navbar;
