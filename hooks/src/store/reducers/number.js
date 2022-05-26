export function numberReducer(state, action) {
  switch (action.type) {
    case "numberAddN":
      return { ...state, number: state.number + action.payload };
    case "numberMultiplyN":
      return { ...state, number: state.number * action.payload };
    case "numberDivideN":
      return { ...state, number: state.number / action.payload };
    case "numberInt":
      return { ...state, number: parseInt(state.number) };
    default:
      return state;
  }
}
