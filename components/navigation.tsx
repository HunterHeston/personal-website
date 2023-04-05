import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav className="flex flex-col min-h">
        <NavItem text="H" href="/" active={router.pathname === "/"} />
        <ul className="flex sm:flex-col">
          <NavItem text="Home" href="/" active={router.pathname === "/"} />
          <NavItem
            text="Blog"
            href="/blog"
            active={router.pathname === "/blog"}
          />
          <NavItem
            text="Contact"
            href="/contact"
            active={router.pathname === "/contact"}
          />
        </ul>
      </nav>
    </>
  );
}

// NavItem Props
type NavItemProps = {
  text: string;
  href: string;
  active: boolean;
};

// a single navigation item
function NavItem({ text, href, active }: NavItemProps) {
  const activeClass = active ? "text-accent" : "text-primary";

  return (
    <li className={"mx-7 my-5 list-none " + activeClass}>
      <Link className="hover:underline hover:text-accent text-xl" href={href}>
        {text}
      </Link>
    </li>
  );
}
