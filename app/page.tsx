import { BlogPosts } from 'app/components/posts'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Java', 'Git',
]

const projects = [
  {
    title: 'HYDRA',
    description: 'A clean water and sanitation progress tracker to help support environmental sustainability.',
    link: 'https://github.com/sanuthiliyoni/hydra',
  },
  {
    title: 'Purrsona',
    description: 'Your own colour analysis and outfit generator.',
    link: 'https://github.com/sanuthiliyoni',
  },
  {
    title: 'VERITAS',
    description: 'A library System.',
    link: 'https://github.com/sanuthiliyoni',
  },
  {
    title: 'Portfolio - Starter',
    description: 'Creating my own portfolio using vercel.',
    link: 'https://github.com/sanuthiliyoni',
  },
  {
    title: 'Supermemory',
    description: 'Study guide and short note generator for students',
    link: 'https://github.com/sanuthiliyoni',
  },
]

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left column: intro + about + skills */}
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            {`hello there !`}
          </p>
          <h1
            className="mb-2 text-4xl font-bold tracking-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent)' }}
          >
            Sanuthi Liyoni Rathnayake
          </h1>
          <p className="mb-8 text-lg" style={{ color: 'var(--muted)' }}>
            Junior Software Engineer in the making
          </p>

          <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            {`ME`}
          </p>
          <p className="mb-4 pl-4 border-l-2" style={{ borderColor: 'var(--accent)' }}>
            {`I'm a Computer Science Undergraduate trying to understand what's happening in the tech industry! Currently fluent in console.log() debugging and Googling error messages I don't understand. My code works and I genuinely don't know why, but I'm learning to be less scared of that.`}
          </p>
          <p className="mb-10 pl-4 border-l-2" style={{ borderColor: 'var(--accent)' }}>
            {`Always down to chat about tech, memes. The goal is to live on the quote "If u get 10,000 errors in your code, you just found 10,000 ways that it didnt work!" stay positive!!`}
          </p>

          <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            {`Skills`}
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
              key={skill}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  border: '1px solid var(--accent)',
                  color: 'var(--accent)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right column: projects */}
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            {`Projects`}
          </p>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              
              <a key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg transition-all hover:-translate-y-0.5"
                style={{ border: '1px solid var(--muted)' }}
              >
                <h3 className="font-semibold mb-1" style={{ color: 'var(--ink)' }}>
                  {project.title} ↗
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mb-3 mt-12 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`Writing`}
      </p>
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  )
}