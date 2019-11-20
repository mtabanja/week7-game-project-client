export default function(state = [], action = {}) {
  switch (action.type) {
    case "ROOMS":
      return action.payload;
    case "ROOM":
      return [...state, action.payload];
    default:
      return state;
  }
}
