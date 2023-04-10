import H1 from "@/components/h1";
import { Blog, listBlogs, readBlog, readBlogBySlug } from "@/lib/blogs";
import { GetStaticPaths, GetStaticProps } from "next";

// Blog Props
interface BlogProps {
  blog: Blog;
}

export default function BlogPost({ blog }: BlogProps) {
  console.log(blog);
  return (
    <>
      <H1>{blog.title}</H1>
      <p>{blog.content}</p>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const results = await listBlogs();
  if (results instanceof Error) {
    console.log(`static generation of blog paths failed: ${results}`);
    throw results;
  }

  const paths = results.map((blog) => ({
    params: { slug: blog.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context = { params: { slug: "" } }
) => {
  const result = await readBlogBySlug(context.params?.slug as string);
  if (result instanceof Error) {
    console.log(`static generation of blog props failed: ${result}`);
    throw result;
  }

  return {
    props: {
      blog: {
        title: result.title,
        date: result.date,
        readingTime: result.readingTime,
        slug: result.slug,
        content: result.content,
      },
    },
  };
};
