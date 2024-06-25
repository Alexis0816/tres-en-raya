import { Square } from "./Square.jsx"

export function WinnerModal({ resetGame, loser, winner }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : `Ganó:`

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        {winner && (
          <header className='win'>
            <Square>{winner}</Square>
          </header>
        )}

        {loser && <h3>El jugador {loser} toma 1 Shot!</h3>}

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
