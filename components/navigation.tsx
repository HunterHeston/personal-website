import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="flex w-screen justify-around">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
