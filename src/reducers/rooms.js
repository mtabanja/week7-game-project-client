export default function(state = null, action = {}) {
  console.log("action test:", action);
  switch (action.type) {
    case "ROOMS":
      return action.payload;
    case "ROOM":
      return [...state, action.payload];
    default:
      return state;
  }
}
