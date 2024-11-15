
import { getPostBySlug } from '@/lib/api';
import { DateTime } from 'luxon';
import markdownStyles from "../markdown-styles.module.css"

export default async function Page({ params }: { params: {slug: string}}) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  return (
  <div>
    <h1>{post.title}</h1>
    <div className=" px-2 my-5">{post.date.toLocaleString(DateTime.DATE_FULL)}</div>
    <div
      className={markdownStyles["markdown"]}
      dangerouslySetInnerHTML={{ __html: post.content }}
    ></div>
  </div>
  )
}
