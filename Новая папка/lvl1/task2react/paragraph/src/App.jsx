/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'

const App = () => {


  const [paragraphs, setParagraphs] = useState([])

  const addParagraph = () => {
    setParagraphs(paragraphs.concat('new paragraph'))
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 border border-gray-300 rounded bg-white w-1/2">
        {paragraphs.map((value, index) => (
          <p key={index} className="my-2 text-gray-600">{value}</p>
        ))}
      </div>

      <button onClick={addParagraph} className="mt-4 bg-green-400 text-white py-2 px-4 rounded hover:bg-green-600">add paragraph</button>

    </div>
  )
}

export default App
