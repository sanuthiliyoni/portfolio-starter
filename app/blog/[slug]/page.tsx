import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1
        className="font-bold text-3xl mb-8 tracking-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent)' }}
      >
        My Blog
      </h1>
      <BlogPosts />
    </section>
  )
}