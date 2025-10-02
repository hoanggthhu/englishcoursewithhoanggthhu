import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto p-10 text-center" data-aos="fade-up">
      <h1 className="text-4xl font-bold mb-4">🌸 Gentle English</h1>
      <p className="mb-6 text-lg">Practice • Breathe • Learn</p>
      <Link href="/exercises" className="bg-pastelPink px-6 py-3 rounded-full shadow">
        Start Exercises
      </Link>
    </div>
  )
}
