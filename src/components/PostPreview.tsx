import { PostMetadata } from "../models/PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <article className="relative group text-white">
      <div className="relative">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-white pt-8 lg:pt-0">
            {props.title}
          </h3>
          <h3 className="text-base tracking-tight text-white pt-8 lg:pt-0">
            {props.date}
          </h3>
        </div>
        <div>
          <a
            className="flex items-center text-sm text-sky-500 font-medium"
            href={`/posts/${props.slug}`}
          >
            <span className="absolute "></span>
            <span className="relative">
              Read more
              <span className="sr-only">
                , Tailwind CSS v3.4: Dynamic viewport units, :has() support,
                balanced headlines, subgrid, and more
              </span>
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default PostPreview;
