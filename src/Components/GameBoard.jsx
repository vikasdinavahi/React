//import { useState } from "react";



export default function ({ onSelectSquare, board }) {

   

  

    // const [gameBoard,setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex){
    //         setGameBoard((prevGameBoard) => {
    //             //We need to create a deep copy as it have nested arrays.
    //             //ref: https://academind.com/tutorials/reference-vs-primitive-values
    //             //old js we used to use [arrayname].slice();
    //             const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]; 
    //             updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //             return updatedBoard;
    //         });

    //         onSelectSquare();
    // };

    return <ol id="game-board">        {
        
            board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>
                                {/* <button onClick={() => handleSelectSquare(rowIndex, colIndex)} >{playerSymbol}</button> */}
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
    </ol>
}