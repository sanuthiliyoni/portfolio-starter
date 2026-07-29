import { BlogPosts } from 'app/components/posts'

const interests = [
  'Creative Thinking', 'Public Speaking', 'Leaderships', 'Problem Solving', 'Funny','Hardworking','Friendly','Theres more...'
]

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`Writing`}
      </p>
      <h1
        className="font-bold text-4xl mb-4 tracking-tight"
        style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent)' }}
      >
        My Blog
      </h1>
      <p className="mb-8" style={{ color: 'var(--muted)' }}>
        {`Notes and ramblings on what I'm learning as I figure out this whole software thing.`}
      </p>

      <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`My Personality`}
      </p>
      <div className="mb-10 flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
            }}
          >
            {interest}
          </span>
        ))}
      </div>

      <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`Posts`}
      </p>
      <BlogPosts />
    </section>
  )
}