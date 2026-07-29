import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Computer Science Undergraduate trying to understand whats happening in the tech industry! 
        Currently fluent in console.log() debugging and Googling error messages I don't understand.
         My code works and I genuinely don't know why, but I'm learning to be less scared of that. Plus theres a nice quote that says "You arent making 10,000 mistakes
         but finding 10,000 ways it wont work. and i stand by that."`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
