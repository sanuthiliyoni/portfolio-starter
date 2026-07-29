import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col gap-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div
            key={post.slug}
            className="p-4 rounded-lg transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid var(--muted)' }}
          >
            <p className="text-sm mb-1 tabular-nums" style={{ color: 'var(--muted)' }}>
              {formatDate(post.metadata.publishedAt, false)}
            </p>
            <h3 className="font-semibold text-lg mb-1" style={{ color: 'var(--ink)' }}>
              {post.metadata.title}
            </h3>
            {post.metadata.summary && (
              <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                {post.metadata.summary}
              </p>
            )}
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              Read post →
            </Link>
          </div>
        ))}
    </div>
  )
}