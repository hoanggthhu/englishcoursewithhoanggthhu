import { useState, useEffect } from 'react'
import FlipBook from '@/components/FlipBook'

export default function Exercises() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/exercises.json')
      .then(res => res.json())
      .then(setData)
  }, [])

  return (
    <div className="container mx-auto p-6" data-aos="fade-up">
      <h1 className="text-3xl font-bold mb-4">Exercises</h1>
      <FlipBook exercises={data} />
    </div>
  )
}
