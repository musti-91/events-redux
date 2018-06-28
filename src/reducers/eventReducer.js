const eventState = [
  { id: 10, title: "first title", description: "some description" },
  { id: 11, title: "second title", description: "some description" },
  { id: 12, title: "third title", description: "some description" },
  { id: 13, title: "fouth title", description: "some description" }
];
export const eventReducer = (state = eventState, action) => {
  switch (action.type) {
    case "ADD__EVENT":
      state = [...state, action.payload];
      break;
    case "DELETE__EVENT_FULFILLED":
      state = [...state];
      const index = state.map((el, i) => el.id).indexOf(action.payload);
      if (index > -1) {
        delete state[index];
      }
      break;
    default:
      console.log(
        "something went wrong, you've seen this from default swith case"
      );
  }
  return state;
};
