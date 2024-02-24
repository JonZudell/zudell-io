import getPostMetadata from "../lib/getPostMetadata";
import PostPreview from "../components/PostPreview";
export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-16">{postPreviews}</div>
    </div>
  );
}
