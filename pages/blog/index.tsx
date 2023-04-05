import H1 from "@/components/h1";

export default function Blog() {
  return (
    <>
      <H1>Blog</H1>
      <p>Subscribe to get emails whenever a new post goes out!</p>
      <form action="submit">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <button type="submit">Subscribe</button>
      </form>
      <p>Coming soon!</p>
    </>
  );
}
