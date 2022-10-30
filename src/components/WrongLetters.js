import React from 'react'

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce((acc, el) => acc === null ? [el] : [acc, ', ', el], null)}
      </div>
    </div>
  )
}

export default WrongLetters