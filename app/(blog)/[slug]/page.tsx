import { getPostBySlug, getPostSlugs } from "@/lib/api";
import { DateTime } from "luxon";
import markdownStyles from "../markdown-styles.module.css";
import Link from "next/link";
import PrismLoader from "@/ui/prism-loader";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  return (
    <div className="my-5 prose dark:prose-invert">
      <h1 className="text-6xl text-yellow-400">{post.title}</h1>
      <div className="px-2 my-5">
        {post.date.toLocaleString(DateTime.DATE_FULL)}
      </div>
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
      <div className="my-5 flex flex-row">
        {post.previousPost && (
          <Link
            className="text-green-400 block flex-1"
            href={`${post.previousPost.slug}`}
          >
            Prev: {post.previousPost.title}
          </Link>
        )}
        {post.nextPost && (
          <Link
            className="text-green-400 block flex-1 text-right"
            href={`${post.nextPost.slug}`}
          >
            Next: {post.nextPost.title}
          </Link>
        )}
      </div>
      <PrismLoader />
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug})) 
}