import React, { useState, useRef } from "react";
import Pawns from "./components/pawns";
import "./App.scss";

const Board = () => {
  const [clicked, setClicked] = useState(false);
  const [prevSquare, setPrevSquare] = useState(null);
  const squareRef = useRef([]);
  const squareRefPawns = useRef([]);
  const [boardData, setBoardData] = useState([]);

  let boardElements = [];

  const boardSquare = (i, j) => {
    if (i % 2 === 0 && j % 2 === 1) {
      return "board-square-even";
    } else if (i % 2 === 1 && j % 2 === 0) {
      return "board-square-even";
    } else {
      return "board-square-odd";
    }
  };

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const isWhite =
        i === 4 ||
        i === 5 ||
        (i % 2 === 0 && j % 2 === 0) ||
        (i % 2 === 1 && j % 2 === 1);

      const squareColor = isWhite ? 0 : i < 4 ? 1 : i > 5 ? 2 : 0;
      const className =
        squareColor === 1 || (squareColor === 2 && i < 6)
          ? "red-square"
          : squareColor === 1 || (squareColor === 2 && i > 5)
          ? "blue-square"
          : "";

      const squareData = [squareColor, i, j];
      boardData.push(squareData);

      const squareElement = (
        <div className="board-square-wraper" key={`${i}-${j}`}>
          <div
            className={boardSquare(i, j)}
            onClick={() => handleSquareClick(i, j)}
            ref={(element) => (squareRef.current[i * 10 + j] = element)}
          >
            {squareColor}
          </div>

          <div
            ref={(element) => (squareRefPawns.current[i * 10 + j] = element)}
            className={`${className}`}
            onClick={() => handleSquareClick(i, j)}
          >
            {squareColor}
          </div>
        </div>
      );
      boardElements.push(squareElement);
    }
  }

  async function handleSquareClick(i, j) {
    const clickedSquareData = boardData.find(
      (square) => square[1] === i && square[2] === j
    );
    const [squareColor, row, col] = clickedSquareData;

    if (prevSquare !== null) {
      const [prevRow, prevCol] = prevSquare;
      const prevSquareIndex = prevRow * 10 + prevCol;
      const currentSquareIndex = row * 10 + col;
      const prevSquareofcurrentIndex = (row - 2) * 10 + (col - 2);

      // function waitForCurrentIndex() {
      //   return new Promise((resolve) => {
      //     const intervalId = setInterval(() => {
      //       if (prevSquareofcurrentIndex === currentSquareIndex) {
      //         console.log("Waiting for");
      //         clearInterval(intervalId);
      //         resolve();
      //       }
      //     }, 100); // delay in milliseconds
      //   });
      // }

      squareRef.current[prevSquareIndex].classList.remove("gray-box");
      // ! B move L / R
      if (
        boardData[prevSquareIndex][0] == 2 &&
        boardData[currentSquareIndex][0] == 0 &&
        (currentSquareIndex == prevSquareIndex - 9 ||
          currentSquareIndex == prevSquareIndex - 11)
      ) {
        squareRef.current[currentSquareIndex].classList.add(
          "board-square-even"
        );
        squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[prevSquareIndex][0] = 0;
          newData[currentSquareIndex][0] = 2;
          return newData;
        });
        squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      }
      // ! R move L / R
      else if (
        boardData[prevSquareIndex][0] == 1 &&
        boardData[currentSquareIndex][0] == 0 &&
        (currentSquareIndex == prevSquareIndex + 9 ||
          currentSquareIndex == prevSquareIndex + 11)
      ) {
        squareRef.current[currentSquareIndex].classList.add(
          "board-square-even"
        );
        squareRefPawns.current[currentSquareIndex].classList.add("red-square");
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[prevSquareIndex][0] = 0;
          newData[currentSquareIndex][0] = 1;
          return newData;
        });
        squareRefPawns.current[prevSquareIndex].classList.remove("red-square");
      }
      // ! B eat R
      else if (
        boardData[prevSquareIndex][0] == 2 &&
        boardData[currentSquareIndex][0] == 0 &&
        boardData[prevSquareIndex - 9][0] == 1 &&
        currentSquareIndex == prevSquareIndex - 18
      ) {
        console.log("albatata m3a alkhorshaf");
        squareRef.current[currentSquareIndex].classList.add(
          "board-square-even"
        );
        squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[prevSquareIndex][0] = 0;
          newData[prevSquareIndex - 9][0] = 0;
          newData[currentSquareIndex][0] = 2;
          return newData;
        });
        squareRefPawns.current[prevSquareIndex - 9].classList.remove(
          "red-square"
        );

        squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      }
      // ! B eat L
      else if (
        boardData[prevSquareIndex][0] == 2 &&
        boardData[currentSquareIndex][0] == 0 &&
        boardData[prevSquareIndex - 11][0] == 1 &&
        currentSquareIndex == prevSquareIndex - 22
      ) {
        console.log("albatata m3a alkhorshaf");
        squareRef.current[currentSquareIndex].classList.add(
          "board-square-even"
        );
        squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[prevSquareIndex][0] = 0;
          newData[prevSquareIndex - 11][0] = 0;
          newData[prevSquareIndex - 22][0] = 2;
          return newData;
        });
        squareRefPawns.current[prevSquareIndex - 11].classList.remove(
          "red-square"
        );
        squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      }

      function checkToEat(row, col) {}
      // if (
      //   boardData[prevSquareofcurrentIndex][0] == 0 &&
      //   boardData[prevSquareIndex - 11][0] == 1 &&
      //   typeof boardData[prevSquareIndex - 33] !== undefined &&
      //   boardData[prevSquareIndex - 33][0] == 1
      // ) {
      //   console.log("albatata m3a alkhorshaf");
      //   squareRef.current[prevSquareofcurrentIndex].classList.add(
      //     "board-square-even"
      //   );
      //   squareRefPawns.current[prevSquareofcurrentIndex].classList.add(
      //     "blue-square"
      //   );
      //   setBoardData((prevData) => {
      //     const newData = [...prevData];
      //     newData[prevSquareIndex][0] = 0;
      //     newData[prevSquareIndex - 11][0] = 0;
      //     newData[prevSquareIndex - 33][0] = 0;
      //     newData[prevSquareofcurrentIndex][0] = 2;
      //     return newData;
      //   });
      //   squareRefPawns.current[prevSquareIndex - 33].classList.remove(
      //     "red-square"
      //   );
      //   squareRefPawns.current[prevSquareIndex - 22].classList.remove(
      //     "blue-square"
      //   );
      //   squareRefPawns.current[prevSquareIndex].classList.remove(
      //     "blue-square"
      //   );
      // }

      console.log(boardData[prevSquareIndex]);
      console.log("albatata", squareColor);
      console.log(boardData[currentSquareIndex]);
    }

    if (squareColor === 1 || squareColor === 2) {
      squareRef.current[row * 10 + col].classList.add("gray-box");
    }

    setPrevSquare([row, col]);
  }

  return (
    <div>
      <div className="board">{boardElements}</div>
    </div>
  );
};

export default Board;

// import React, { useState } from "react";
// import Pawns from "./components/pawns";
// import "./App.scss";

// const Board = () => {
//   const [clicked, setClicked] = useState(false);

//   let board = [];
//   let firstP = [];
//   let secondP = [];

//   for (let i = 0; i < 20; i++) {
//     firstP.push(1);
//     secondP.push(1);
//   }

//   const boardSquare = (i, j) => {
//     if (i % 2 === 0 && j % 2 === 1) {
//       return "board-square-even";
//     } else if (i % 2 === 1 && j % 2 === 0) {
//       return "board-square-even";
//     } else {
//       return "board-square-odd";
//     }
//   };

//   for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//       const isWhite =
//         i === 4 ||
//         i === 5 ||
//         (i % 2 === 0 && j % 2 === 0) ||
//         (i % 2 === 1 && j % 2 === 1);
//       const squareColor = isWhite ? 0 : 1;
//       const className =
//         squareColor === 1 && i < 6
//           ? "red-square"
//           : squareColor === 1 && i > 5
//           ? "blue-square"
//           : "";
//       board.push([
//         <div className="board-square-wraper" key={`${i}-${j}`}>
//           <div
//             className={boardSquare(i, j)}
//             onClick={() => handleSquareClick(i, j)}
//           >
//             {squareColor}
//           </div>
//           <div
//             className={`${className}`}
//             onClick={() => handleSquareClick(i, j)}
//           >
//             {squareColor}
//           </div>
//         </div>,
//         [squareColor, i, j],
//       ]);
//     }
//   }

//   function handleSquareClick(i, j) {
//     const clickedSquare = board.find(
//       (square) => square[1][1] === i && square[1][2] === j
//     );
//     const [squareColor, row, col] = clickedSquare[1];
//     const clickedBoardSquare = board[row][col];

//     console.log(
//       `Clicked square has color ${squareColor} at row ${row} and column ${col}. ${board[row][col]}.`,
//       clickedBoardSquare
//     );
//   }

//   return (
//     <div>
//       <div className="board">
//         {board.map((cell) => {
//           return cell[0];
//         })}
//       </div>
//     </div>
//   );
// };

// export default Board;
