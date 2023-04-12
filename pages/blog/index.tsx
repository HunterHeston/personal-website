import EmailForm from "@/components/emailSubscriberForm";
import H1 from "@/components/h1";
import { Blog, listBlogs } from "@/lib/blogs";
import Link from "next/link";

// Blog Props
interface BlogProps {
  blogs: Blog[];
}

export default function BlogListing({ blogs }: BlogProps) {
  return (
    <>
      <H1>Blog</H1>
      <p className="mb-5">
        Subscribe and you&apos;ll get <span className="font-bold">one</span>{" "}
        email when I publish a new blog post.
      </p>
      <EmailForm />
      <ul>
        {blogs.map((blog) => (
          <BlogLi key={blog.title} {...blog} />
        ))}
      </ul>
    </>
  );
}

function BlogLi(blog: Blog) {
  return (
    <li className="flex flex-col mb-7" key={blog.title}>
      <Link className="text-2xl" href={`/blog/${blog.slug}`}>
        {blog.title}
      </Link>
      <p className="text-primaryFaded">
        {blog.date}{" "}
        <span className="ml-3 italic">{blog.readingTime} min read</span>
      </p>
    </li>
  );
}

/**
 * Generate static props for the blog listing page
 * @returns {Blog[] | Error}
 */
export async function getStaticProps() {
  let blogs: Blog[] = [];

  try {
    const result = await listBlogs();
    if (result instanceof Error) {
      console.error(`static generation of blog props failed: ${result}`);
      throw result;
    }

    blogs = result;
  } catch (e) {
    console.error(
      `static generation of blog props threw unexpected error: ${e}`
    );
    throw e;
  }

  return {
    props: {
      blogs,
    },
  };
}
