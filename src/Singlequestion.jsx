import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Singlequestion = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  const [showInfo, setShowInfo] = useState(null)
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => toggleQuestion(id)}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  )
}

export default Singlequestion
