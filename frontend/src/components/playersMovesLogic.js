export function R1L3P1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex + 9,
      prevSquareIndex + 29,
      prevSquareIndex + 51,
      prevSquareIndex + 73,
    ],
    [
      prevSquareIndex + 18,
      prevSquareIndex + 40,
      prevSquareIndex + 62,
      prevSquareIndex + 84,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 1 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == -84
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 2
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == -62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 2) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 2) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === -84) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("blue-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("red-square");
      squareRefPawns.current[currentSquareIndex].classList.add("red-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 1;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === -62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("blue-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("red-square");
      squareRefPawns.current[currentSquareIndex].classList.add("red-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 1;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === -40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("blue-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("red-square");
      squareRefPawns.current[currentSquareIndex].classList.add("red-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 1;
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
}
// ! player2 eats on right
export function R1L3(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
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
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 84
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 84) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R1L2R1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 29,
      prevSquareIndex - 51,
      prevSquareIndex - 71,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 40,
      prevSquareIndex - 62,
      prevSquareIndex - 80,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 80
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 80) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R1L1R1L1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 29,
      prevSquareIndex - 49,
      prevSquareIndex - 69,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 40,
      prevSquareIndex - 58,
      prevSquareIndex - 80,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 80
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 58
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 80) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 58) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R1L1R2(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 29,
      prevSquareIndex - 49,
      prevSquareIndex - 67,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 40,
      prevSquareIndex - 58,
      prevSquareIndex - 76,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 76
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 58
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 76) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 58) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R4(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 27,
      prevSquareIndex - 45,
      prevSquareIndex - 63,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 36,
      prevSquareIndex - 54,
      prevSquareIndex - 72,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 72
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 54
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 72) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 54) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 36) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R3L1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 27,
      prevSquareIndex - 45,
      prevSquareIndex - 65,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 36,
      prevSquareIndex - 54,
      prevSquareIndex - 76,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 76
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 54
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 76) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 54) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 36) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R2L2(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 27,
      prevSquareIndex - 47,
      prevSquareIndex - 69,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 36,
      prevSquareIndex - 58,
      prevSquareIndex - 80,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 80
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 58
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 80) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 58) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 36) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function R2L1R1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 9,
      prevSquareIndex - 27,
      prevSquareIndex - 47,
      prevSquareIndex - 67,
    ],
    [
      prevSquareIndex - 18,
      prevSquareIndex - 36,
      prevSquareIndex - 58,
      prevSquareIndex - 76,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 76
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 58
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 76) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 58) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 36) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
// ! player2 eats on left
export function L1R3(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 31,
      prevSquareIndex - 49,
      prevSquareIndex - 67,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 40,
      prevSquareIndex - 58,
      prevSquareIndex - 76,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 76
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 58
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 76) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 58) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L1R2L1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 31,
      prevSquareIndex - 49,
      prevSquareIndex - 69,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 40,
      prevSquareIndex - 58,
      prevSquareIndex - 80,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 80
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 58
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 80) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 58) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L1R1L1R1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 31,
      prevSquareIndex - 51,
      prevSquareIndex - 71,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 40,
      prevSquareIndex - 62,
      prevSquareIndex - 80,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 80
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 80) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L1R1L2(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 31,
      prevSquareIndex - 51,
      prevSquareIndex - 73,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 40,
      prevSquareIndex - 62,
      prevSquareIndex - 84,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 84
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 84) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 40) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L4(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 33,
      prevSquareIndex - 55,
      prevSquareIndex - 77,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 44,
      prevSquareIndex - 66,
      prevSquareIndex - 88,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 88
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 66
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 88) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 66) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 44) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L3R1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 33,
      prevSquareIndex - 55,
      prevSquareIndex - 75,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 44,
      prevSquareIndex - 66,
      prevSquareIndex - 85,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 85
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 66
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 85) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 66) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 44) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L2R2(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 33,
      prevSquareIndex - 53,
      prevSquareIndex - 71,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 44,
      prevSquareIndex - 62,
      prevSquareIndex - 80,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 80
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 80) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 44) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
export function L2R1L1(
  prevSquareIndex,
  currentSquareIndex,
  boardData,
  squareRef,
  squareRefPawns,
  setBoardData
) {
  const possibleIndicesEmptyAndPawns = [
    [
      prevSquareIndex - 11,
      prevSquareIndex - 33,
      prevSquareIndex - 53,
      prevSquareIndex - 73,
    ],
    [
      prevSquareIndex - 22,
      prevSquareIndex - 44,
      prevSquareIndex - 62,
      prevSquareIndex - 84,
    ],
  ];
  if (
    boardData[currentSquareIndex][0] == 0 &&
    boardData[prevSquareIndex][0] === 2 &&
    possibleIndicesEmptyAndPawns[1].includes(currentSquareIndex) &&
    (prevSquareIndex - currentSquareIndex == 84
      ? possibleIndicesEmptyAndPawns[0].every(
          (index) => boardData[index][0] === 1
        ) &&
        possibleIndicesEmptyAndPawns[1].every(
          (index) => boardData[index][0] === 0
        )
      : prevSquareIndex - currentSquareIndex == 62
      ? possibleIndicesEmptyAndPawns[0]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 3)
          .every((index) => boardData[index][0] === 0)
      : possibleIndicesEmptyAndPawns[0]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 1) &&
        possibleIndicesEmptyAndPawns[1]
          .slice(0, 2)
          .every((index) => boardData[index][0] === 0))
  ) {
    console.log("ahaaaaaaaaaaaaaaaah");
    if (prevSquareIndex - currentSquareIndex === 84) {
      possibleIndicesEmptyAndPawns[0].forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 62) {
      possibleIndicesEmptyAndPawns[0].slice(0, 3).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
      setBoardData((prevData) => {
        const newData = [...prevData];
        newData[currentSquareIndex][0] = 2;
        newData[prevSquareIndex][0] = 0;
        return newData;
      });
    } else if (prevSquareIndex - currentSquareIndex === 44) {
      possibleIndicesEmptyAndPawns[0].slice(0, 2).forEach((index) => {
        setBoardData((prevData) => {
          const newData = [...prevData];
          newData[index][0] = 0;
          return newData;
        });
        squareRefPawns.current[index].classList.remove("red-square");
      });
      squareRefPawns.current[prevSquareIndex].classList.remove("blue-square");
      squareRefPawns.current[currentSquareIndex].classList.add("blue-square");
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
}
