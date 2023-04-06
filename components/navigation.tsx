import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav className="flex flex-col mr-2">
        <Link
          href="/"
          className="leading-loose ml-3 mb-4 text-4xl font-extrabold"
        >
          HH
        </Link>
        <ul className="flex sm:flex-col">
          <NavItem text="home" href="/" active={router.pathname === "/"} />
          <NavItem
            text="work"
            href="/work"
            active={router.pathname === "/work"}
          />
          <NavItem
            text="blog"
            href="/blog"
            active={router.pathname === "/blog"}
          />
          <NavItem
            text="contact"
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
  const activeClass = active ? "bg-darker text-primary" : "";

  return (
    <li
      // this inline style removes a small grey highlight that appears when you tap on a link on mobile
      // https://stackoverflow.com/a/72323247
      style={{ WebkitTapHighlightColor: "transparent" }}
      className={[
        "transition-all text-primaryFaded hover:text-primary w-fit px-3 py-2 mb-2 rounded-lg",
        activeClass,
        className,
      ].join(" ")}
    >
      <Link className="text-md sm:text-xl" href={href}>
        {text}
      </Link>
    </li>
  );
}
