import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../lib/getPostMetadata";
const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), "src/posts");
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div className="max-w-lg mx-auto">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl ">
          {post.data.title}
        </h1>
      </div>

      <article className="prose max-w-lg mx-auto p-2">
        <Markdown
          options={{
            overrides: {
              h1: {
                props: {
                  className: "text-4xl",
                },
              },
              h2: {
                props: {
                  className: "text-3xl mt-8",
                },
              },
              h3: {
                props: {
                  className: "text-2xl mt-8",
                },
              },
              p: {
                props: {
                  className: "text-lg mt-4",
                },
              },
              a: {
                props: {
                  className: "underline text-pink-200 hover:text-pink-400 visited:text-green-600"
                }
              },
              table: {
                props: {
                  className: "min-w-full divide-y divide-gray-700",
                },
              },
              img: {
                props: {
                  className: "w-full mt-3",
                },
              },
              pre: {
                props: {
                  className: "p-2 my-2 border-2 bg-slate-700 border-black overflow-scroll overflow-y-hidden"
                }
              }
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </div>
  );
}
