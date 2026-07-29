import { BlogPosts } from 'app/components/posts'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Python', 'Java', 'Git',
]

const projects = [
  {
    title: 'Project Name',
    description: 'One or two sentences on what it does and what you used to build it.',
    link: 'https://github.com/sanuthiliyoni',
  },
  {
    title: 'Project Name',
    description: 'One or two sentences on what it does and what you used to build it.',
    link: 'https://github.com/sanuthiliyoni',
  },
]

export default function Page() {
  return (
    <section>
      <p className="mb-2 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`// hello world`}
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
        {`// about me`}
      </p>
      <p className="mb-4 pl-4 border-l-2" style={{ borderColor: 'var(--accent)' }}>
        {`I'm a Computer Science Undergraduate trying to understand what's happening in the tech industry! Currently fluent in console.log() debugging and Googling error messages I don't understand. My code works and I genuinely don't know why — but I'm learning to be less scared of that.`}
      </p>
      <p className="mb-10 pl-4 border-l-2" style={{ borderColor: 'var(--accent)' }}>
        {`When I'm not fighting with semicolons, you can find me turning coffee into (mostly functional) code. Always down to chat about tech, memes, or why my code broke at 2am for no reason.`}
      </p>

      <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`// skills`}
      </p>
      <div className="mb-10 flex flex-wrap gap-2">
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

      <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`// projects`}
      </p>
      <div className="mb-10 flex flex-col gap-4">
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

      <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
        {`// writing`}
      </p>
      <div className="my-4">
        <BlogPosts />
      </div>
    </section>
  )
}