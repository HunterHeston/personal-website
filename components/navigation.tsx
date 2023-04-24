import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav className="flex flex-col mr-2">
        <Link
          // this inline style removes a small grey highlight that appears when you tap on a link on mobile
          // https://stackoverflow.com/a/72323247
          style={{ WebkitTapHighlightColor: "transparent" }}
          href="/"
          className="leading-loose ml-3 mb-4 text-4xl font-extrabold"
        >
          HH
        </Link>
        <ul className="flex sm:flex-col">
          <NavItem text="Home" href="/" active={router.pathname === "/"} />
          <NavItem
            text="Work"
            href="/work"
            active={router.pathname === "/work"}
          />
          <NavItem
            text="About"
            href="/about"
            active={router.pathname.startsWith("/about")}
          />

          <NavItem
            text="Blog"
            href="/blog"
            active={router.pathname.startsWith("/blog")}
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
    ? "bg-darker text-primary hover:text-primary"
    : "hover:text-darker dark:hover:text-primary";

  return (
    <li
      // this inline style removes a small grey highlight that appears when you tap on a link on mobile
      // https://stackoverflow.com/a/72323247
      style={{ WebkitTapHighlightColor: "transparent" }}
      className={[
        activeClass,
        "transition-all text-primaryFaded  w-fit px-3 py-2 mb-2 rounded-lg",
        className,
      ].join(" ")}
    >
      <Link className="text-md sm:text-xl" href={href}>
        {text}
      </Link>
    </li>
  );
}
