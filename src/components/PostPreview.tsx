import { PostMetadata } from "../models/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <article className="relative group text-white bg-slate-800 p-4 rounded-md">
      <div className="relative">
        <div className="flex">
          <a
            className="flex items-center text-sm text-sky-500 font-medium"
            href={`/posts/${props.slug}`}
          >
            <div className="flex">
              <div>
                <h3 className="text-base font-semibold tracking-tight text-white lg:pt-0">
                  {props.title}
                </h3>
                <h3 className="text-base tracking-tight text-white lg:pt-0">
                  {props.date}
                </h3>
              </div>
              <span className="absolute mt-3 right-0">
                Read more &gt;
                <span className="sr-only">
                  , Tailwind CSS v3.4: Dynamic viewport units, :has() support,
                  balanced headlines, subgrid, and more
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
