import React, { useState, useRef } from "react";
import {
  R1L3,
  R1L2R1,
  R1L1R1L1,
  R1L1R2,
  R4,
  R3L1,
  R2L2,
  R2L1R1,
  L1R3,
  L1R2L1,
  L1R1L1R1,
  L1R1L2,
  L4,
  L3R1,
  L2R2,
  L2R1L1,
} from "./components/playersMovesLogic";
import "./App.scss";
// import { R1L2R1 } from "./components/R1L2R1";

const Board = () => {
  const [prevSquare, setPrevSquare] = useState(null);
  const squareRef = useRef([]);
  const squareRefPawns = useRef([]);
  const [boardData, setBoardData] = useState([]);
  const [playerTurn, setPlayerTurn] = useState("1");

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

  function handleSquareClick(i, j) {
    const clickedSquareData = boardData.find(
      (square) => square[1] === i && square[2] === j
    );
    const [squareColor, row, col] = clickedSquareData;

    if (prevSquare !== null) {
      const [prevRow, prevCol] = prevSquare;
      const prevSquareIndex = prevRow * 10 + prevCol;
      const currentSquareIndex = row * 10 + col;
      const possibleIndices = [
        prevSquareIndex - 11,
        prevSquareIndex - 33,
        prevSquareIndex - 55,
        prevSquareIndex - 77,
      ];
      const possibleIndicesEmpty = [
        prevSquareIndex - 22,
        prevSquareIndex - 44,
        prevSquareIndex - 66,
        prevSquareIndex - 88,
      ];
      const possibleIndicesLeft = [
        prevSquareIndex - 9,
        prevSquareIndex - 27,
        prevSquareIndex - 45,
        prevSquareIndex - 63,
      ];
      const possibleIndicesEmptyLeft = [
        prevSquareIndex - 18,
        prevSquareIndex - 36,
        prevSquareIndex - 54,
        prevSquareIndex - 72,
      ];
      const possibleIndicesR1AferThatL3 = [
        [
          prevSquareIndex - 9,
          prevSquareIndex - 29,
          prevSquareIndex - 51,
          prevSquareIndex - 73,
        ],
        [
          prevSquareIndex - 18,
          prevSquareIndex - 40,
          prevSquareIndex - 62,
          prevSquareIndex - 84,
        ],
      ];

      squareRef.current[prevSquareIndex].classList.remove("gray-box");

      // !1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
      // ! R move L / R
      if (
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

      // ! 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
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
      // ! B eat R
      else if (
        boardData[prevSquareIndex][0] === 2 &&
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
      // ! B MultiEat L
      else if (
        boardData[currentSquareIndex][0] == 0 &&
        boardData[prevSquareIndex][0] === 2 &&
        currentSquareIndex ==
          prevSquareIndex - (prevSquareIndex - currentSquareIndex) &&
        (prevSquareIndex - currentSquareIndex == 88
          ? possibleIndices.every((index) => boardData[index][0] === 1) &&
            possibleIndicesEmpty.every((index) => boardData[index][0] === 0)
          : prevSquareIndex - currentSquareIndex == 66
          ? possibleIndices
              .slice(0, 3)
              .every((index) => boardData[index][0] === 1) &&
            possibleIndicesEmpty
              .slice(0, 3)
              .every((index) => boardData[index][0] === 0)
          : possibleIndices
              .slice(0, 2)
              .every((index) => boardData[index][0] === 1) &&
            possibleIndicesEmpty
              .slice(0, 2)
              .every((index) => boardData[index][0] === 0))
      ) {
        console.log("ahaaaaaaaaaaaaaaaah");
        if (prevSquareIndex - currentSquareIndex === 88) {
          possibleIndices.forEach((index) => {
            setBoardData((prevData) => {
              const newData = [...prevData];
              newData[index][0] = 0;
              return newData;
            });
            squareRefPawns.current[index].classList.remove("red-square");
          });
          squareRefPawns.current[prevSquareIndex].classList.remove(
            "blue-square"
          );
          squareRefPawns.current[currentSquareIndex].classList.add(
            "blue-square"
          );
          setBoardData((prevData) => {
            const newData = [...prevData];
            newData[currentSquareIndex][0] = 2;
            newData[prevSquareIndex][0] = 0;
            return newData;
          });
        } else if (prevSquareIndex - currentSquareIndex === 66) {
          possibleIndices.slice(0, 3).forEach((index) => {
            setBoardData((prevData) => {
              const newData = [...prevData];
              newData[index][0] = 0;
              return newData;
            });
            squareRefPawns.current[index].classList.remove("red-square");
          });
          squareRefPawns.current[prevSquareIndex].classList.remove(
            "blue-square"
          );
          squareRefPawns.current[currentSquareIndex].classList.add(
            "blue-square"
          );
          setBoardData((prevData) => {
            const newData = [...prevData];
            newData[currentSquareIndex][0] = 2;
            newData[prevSquareIndex][0] = 0;
            return newData;
          });
        } else if (prevSquareIndex - currentSquareIndex === 44) {
          possibleIndices.slice(0, 2).forEach((index) => {
            setBoardData((prevData) => {
              const newData = [...prevData];
              newData[index][0] = 0;
              return newData;
            });
            squareRefPawns.current[index].classList.remove("red-square");
          });
          squareRefPawns.current[prevSquareIndex].classList.remove(
            "blue-square"
          );
          squareRefPawns.current[currentSquareIndex].classList.add(
            "blue-square"
          );
          setBoardData((prevData) => {
            const newData = [...prevData];
            newData[currentSquareIndex][0] = 2;
            newData[prevSquareIndex][0] = 0;
            return newData;
          });
        }
        // if (
        //   boardData[currentSquareIndex][0] === 2 &&
        //   (boardData[prevSquareIndex - 11][0] == 1 ||
        //     boardData[prevSquareIndex - 9][0] == 1)
        // ) {
        //   squareRef.current[prevSquareIndex - 22].classList.add("gray-box");

        //   alert("continue eating");
        // }
      }

      // ! B MultiEat R1 after that L3
      else
        R1L3(
          prevSquareIndex,
          currentSquareIndex,
          boardData,
          squareRef,
          squareRefPawns,
          setBoardData
        );

      R1L2R1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      R1L1R1L1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      R1L1R2(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      R4(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      R3L1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      R2L2(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      R2L1R1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L1R3(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L1R2L1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L1R1L1R1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L1R1L2(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L4(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L3R1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L2R2(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
      L2R1L1(
        prevSquareIndex,
        currentSquareIndex,
        boardData,
        squareRef,
        squareRefPawns,
        setBoardData
      );
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

// (prevSquareIndex - currentSquareIndex == 44
//   ? boardData[possibleIndices[0]][0] === 1 &&
//     possibleIndices.slice(2).every((index) => boardData[index][0] === 0)
//   : prevSquareIndex - currentSquareIndex == 66
//   ? boardData[possibleIndices[0]][0] === 1 &&
//     possibleIndices.slice(3).every((index) => boardData[index][0] === 0)
//   : boardData[possibleIndices[0]][0] === 1 &&
//     possibleIndices.every((index) => boardData[index][0] === 0))
