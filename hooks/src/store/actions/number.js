export function numberAddN(dispatch, number) {
  dispatch({ type: "numberAddN", payload: number });
}

export function numberMultiplyN(dispatch, number) {
  dispatch({ type: "numberMultiplyN", payload: number });
}

export function numberDivideN(dispatch, number) {
  dispatch({ type: "numberDivideN", payload: number });
}

export function numberInt(dispatch) {
  dispatch({ type: "numberInt" });
}
