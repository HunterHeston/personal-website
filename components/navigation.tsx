import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav className="flex flex-col mr-2">
        <Link href="/" className="mt-5 ml-3 mb-4 text-4xl font-extrabold">
          HH
        </Link>
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
  className?: string;
};

// a single navigation item
function NavItem({ text, href, active, className }: NavItemProps) {
  const activeClass = active
    ? "border border-solid border-white rounded-lg"
    : "";

  return (
    <li className={["w-fit px-3 py-2", activeClass, className].join(" ")}>
      <Link
        className="hover:underline hover:text-accent text-md sm:text-xl"
        href={href}
      >
        {text}
      </Link>
    </li>
  );
}
