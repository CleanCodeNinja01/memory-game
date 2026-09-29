import { useState } from 'react'
import GameBoard from './app/components/GameBoard/GameBoard'
import Graffiti from './app/components/Graffiti/Graffiti'
import ResetButton from './app/components/ResetButton/ResetButton'
import ScoreBoard from './app/components/ScoreBoard/ScoreBoard'
import Settings from './app/components/Settings/Settings'
import { generateIcons } from './utils/generateIcons'

function App() {

  const [gridSize, setGridSize] = useState(4)

  const createNewDeck = (size) => {
    const iconCount = (size*size)/2
    const icons = generateIcons(iconCount)
    const newDeck = [...icons, ...icons]

    return shuffleDeck(newDeck);

  }

  const [deck, setDeck] = useState(()=>createNewDeck(4))

  const [matches, setMatches] = useState(0);

  const [moves, setMoves] = useState(0)

  const [resetCounter, setResetCounter] = useState(0);

  return (
    <main>
      <h1 className='text-3xl font-bold text-center mb-4'>Memory Match Mania</h1>
      <Settings />
      <ScoreBoard />
      <ResetButton />
      <GameBoard />
      <Graffiti />
    </main>
  )
}

export default App
