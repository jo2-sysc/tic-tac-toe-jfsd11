import './App.css';
import Square from './components/Square';
// child component
import { useState } from 'react';

function App() {
  const [ squares, setSquares ] = useState(Array(9).fill(''));
  const [ xIsNext, setXIsNext ] = useState(true) // true / false
  // const winner = declareWinner();
  function declareWinner() {
    const combo = [
      [0, 1, 2], // i => 0
      [3, 4, 5], // i => 1
      [6, 7, 8], // i => 2
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < combo.length; i++) {
      const [x, y, z] = combo[i];
      // i => 0 >>>>>> x => 0, y => 1, z => 2
      if (squares[x] && // check whether position x is empty string => false if empty
        squares[x] === squares[y] && 
        squares[x] === squares[z]) {
        return squares[x] // 'X', 'O'
      }
    }
    return null;
  }

  function handleRestart () {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
  }

  function onSquareClick(position) {
    if (squares[position] || declareWinner()) { // true / false => Boolean
      // 畀個句號佢 => return;
      return;
    }

    // !true => false
    // !!'hello world' = > true
    // 'hello world' => string
    // !'hello world' => String >> Boolean (datatype change)
    // !'hello world' => false (Boolean, not String anymore)
    // !!'hello world' => true (Boolean)

    // ([].length > 0) && << do sth >>
    // !![].length && < do sth >>

    // comparion operator ==, !==, >, <, >=, <=
    // it will turn any type to Boolean (true / false)

    // array 
    const newSquares = squares.slice();
    // because STATE cannot be changed without setState
    // photocopy 影印 => make a VARIABLE that we can change
    if (xIsNext) {
      newSquares[position] = 'X';
      // setXIsNext(false)
    } else {
      newSquares[position] = 'O';
      // setXIsNext(true)
    }
    setXIsNext(!xIsNext);
    // ['X', 'O', '', 'O', 'X', '', '', '', 'X']
    // assume i = 0 => ['O', 'O', '', 'O', 'X', '', '', '', 'X']
    setSquares(newSquares);
  }
  const winner = declareWinner(); // 'X', 'O', null
  console.log(!winner);
  return (
    <div className="App">
      <div className="grid-container">
        {/*
          // [0, 0, 0, 0, 0, 0, 0, 0, 0]
          Array(9).fill(0).map((x, i) => {
            return <Square 
              num={i+1} 
              key={i}
            />
          })
        */} 
        {/*
          <Square num={squares[0]} handleOnClick={() => onSquareClick(0)} />
          <Square num={squares[1]} handleOnClick={() => onSquareClick(1)} />
          <Square num={squares[2]} handleOnClick={() => onSquareClick(2)} />
          <Square num={squares[3]} handleOnClick={() => onSquareClick(3)} />
          <Square num={squares[4]} handleOnClick={() => onSquareClick(4)} />
          <Square num={squares[5]} handleOnClick={() => onSquareClick(5)} />
          <Square num={squares[6]} handleOnClick={() => onSquareClick(6)} />
          <Square num={squares[7]} handleOnClick={() => onSquareClick(7)} />
          <Square num={squares[8]} handleOnClick={() => onSquareClick(8)} />
        */} 
        {
          squares.map((symbol, position) => {
            return (
              <Square 
                key={position}
                num={symbol} 
                handleOnClick={() => onSquareClick(position)} 
              />
            )
          })
        }
        
      </div>
      {
          !!winner && <div style={{marginTop: '8px'}}>The winner is {winner}!</div>
      }
        <div style={{marginTop: '8px'}}>
          { !winner && (xIsNext ? 'Next move: X' : 'Next move: O')}
        </div>
        <div style={{marginTop: '8px'}}>
          <button onClick={handleRestart}>Restart</button>
        </div>
      </div>
      
  );
}

export default App;
