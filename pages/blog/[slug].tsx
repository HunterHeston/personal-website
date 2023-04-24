import Code from "@/components/code";
import H1 from "@/components/h1";
import H2 from "@/components/h2";
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
      <article className="text-md">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => <H1 {...props} />,
            h2: ({ node, ...props }) => <H2 {...props} />,
            h3: ({ node, ...props }) => (
              <h3 className="text-xl mb-2" {...props} />
            ),
            h4: ({ node, ...props }) => <h4 className="mb-2" {...props} />,
            h5: ({ node, ...props }) => <h5 className="mb-2" {...props} />,
            h6: ({ node, ...props }) => <h6 className="mb-2" {...props} />,
            p: ({ node, ...props }) => (
              <p className="leading-loose my-5" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="decoration-accent underline visited:text-accent visited:dark:text-darkAccent "
                {...props}
              />
            ),
            blockquote: ({ node, ...props }) => (
              <blockquote
                className="border-l-4 border-l-neutral-600 rounded-sm pl-5 bg-neutral-200 dark:bg-darker"
                {...props}
              />
            ),
            br: ({ node, ...props }) => <br {...props} />,
            em: ({ node, ...props }) => <em {...props} />,
            hr: ({ node, ...props }) => <hr className="my-4" {...props} />,
            img: ({ node, ...props }) => (
              // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
              <img className="w-auto h-auto" {...props} />
            ),
            pre: ({ node, ...props }) => <pre className="" {...props} />,
            strong: ({ node, ...props }) => <strong {...props} />,
            ol: ({ node, ...props }) => (
              <ol className="list-decimal my-5 pl-3" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc mb-5 mt-1 pl-3" {...props} />
            ),
            li: ({ node, ...props }) => <li {...props} />,
            code: ({ node, inline, className, children, ...props }) => (
              <Code inline={inline} className={className} {...props}>
                {String(children)}
              </Code>
            ),
            table: ({ node, ...props }) => (
              <table className="table-auto w-full " {...props} />
            ),
            thead: ({ node, ...props }) => (
              <thead className="border-b" {...props} />
            ),
            tbody: ({ node, ...props }) => <tbody {...props} />,
            tr: ({ node, ...props }) => (
              <tr
                className="even:text-accent even:dark:text-darkAccent"
                {...props}
              />
            ),
            th: ({ node, ...props }) => (
              <th className="p-3 text-start" {...props} />
            ),
            td: ({ node, ...props }) => (
              <td className="p-3 text-start" {...props} />
            ),
          }}
        >
          {blog.content}
        </ReactMarkdown>
      </article>
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
