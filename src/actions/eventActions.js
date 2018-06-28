export const addEvent = event => {
  return dispatchEvent => {
    setTimeout(() => {
      dispatchEvent({
        type: "ADD__EVENT",
        payload: {
          id: event.id,
          title: event.title,
          description: event.description
        }
      });
    }, 1000);
  };
};
// using promise to async action, check event reducer deleteEvent to add _FULFILLED to your type action
export const deleteEvent = event_id => {
  return {
    type: "DELETE__EVENT",
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(event_id);
      }, 1000);
    })
  };
};
