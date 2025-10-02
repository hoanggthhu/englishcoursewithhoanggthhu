import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'

const HTMLFlipBook = dynamic(() => import('react-pageflip'), { ssr: false })

export default function FlipBook({ exercises }) {
  const [pages, setPages] = useState([])

  useEffect(() => {
    if (exercises) {
      setPages(exercises.map((ex, i) => (
        <div key={i} className="page">
          <h3 className="font-bold mb-2">{ex.title}</h3>
          <p>{ex.question || ex.content}</p>
        </div>
      )))
    }
  }, [exercises])

  return (
    <div className="flipbook-wrapper">
      <HTMLFlipBook width={350} height={500} className="shadow-lg">
        {pages}
      </HTMLFlipBook>
    </div>
  )
}
