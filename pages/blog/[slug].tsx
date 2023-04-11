import Code from "@/components/code";
import H1 from "@/components/h1";
import H2 from "@/components/h2";
import P from "@/components/p";
import { Blog, listBlogs, readBlogBySlug } from "@/lib/blogs";
import { GetStaticPaths, GetStaticProps } from "next";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

// Blog Props
interface BlogProps {
  blog: Blog;
}

export default function BlogPost({ blog }: BlogProps) {
  return (
    <>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <H1 {...props} />,
          h2: ({ node, ...props }) => <H2 {...props} />,
          h3: ({ node, ...props }) => <h3 {...props} />,
          h4: ({ node, ...props }) => <h4 {...props} />,
          h5: ({ node, ...props }) => <h5 {...props} />,
          h6: ({ node, ...props }) => <h6 {...props} />,
          p: ({ node, ...props }) => <P {...props} />,
          a: ({ node, ...props }) => <a {...props} />,
          blockquote: ({ node, ...props }) => <blockquote {...props} />,
          br: ({ node, ...props }) => <br {...props} />,
          em: ({ node, ...props }) => <em {...props} />,
          hr: ({ node, ...props }) => <hr {...props} />,
          img: ({ node, ...props }) => <img {...props} />,
          li: ({ node, ...props }) => <li {...props} />,
          ol: ({ node, ...props }) => <ol {...props} />,
          pre: ({ node, ...props }) => <pre {...props} />,
          strong: ({ node, ...props }) => <strong {...props} />,
          ul: ({ node, ...props }) => <ul {...props} />,
          code: ({ node, inline, className, children, ...props }) => (
            <Code inline={inline} className={className} {...props}>
              {String(children)}
            </Code>
          ),
        }}
      >
        {blog.content}
      </ReactMarkdown>
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
