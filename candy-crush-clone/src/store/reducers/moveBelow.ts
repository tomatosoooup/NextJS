import { WritableDraft } from "immer/dist/types/types-external";
import { formulaForMoveBelow } from "../../utils/formulas";
import { candies } from "../../utils/candyData";

export const moveBelowReducer = (
  state: WritableDraft<{
    board: string[];
    boardSize: number;
    squareBeingDragged: Element | undefined;
    squareBeingReplaced: Element | undefined;
  }>
) => {
  const newBoard: string[] = [...state.board];
  const { boardSize } = state;
  let boardChanges: boolean = false;
  const formulaForMove: number = formulaForMoveBelow(boardSize);
  for (let i: number = 0; i <= formulaForMove; i++) {
    const firstRow = Array(boardSize)
      .fill(0)
      .map((_value: number, index: number) => index);
    const isFirstRow = firstRow.includes(i);

    if (isFirstRow && newBoard[i] === "") {
      let randomNumber = Math.floor(Math.random() * candies.length);
      newBoard[i] = candies[randomNumber];
      boardChanges = true;
    }

    if (newBoard[i + boardSize] === "") {
      newBoard[i + boardSize] = newBoard[i];
      newBoard[i] = "";
      boardChanges = true;
    }

    if (boardChanges) state.board = newBoard;
  }
};
