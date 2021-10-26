const Back = (payload) => (dispatch) => {
  dispatch({
    type: "BACK",
    payload: payload,
  });
};

export default Back;
