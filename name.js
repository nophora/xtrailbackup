const Name = (payload) => (dispatch) => {
  dispatch({
    type: "NAME",
    payload: payload,
  });
};

export default Name;
