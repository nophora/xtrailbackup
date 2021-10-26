const Play = (payload) => (dispatch) => {
  dispatch({
    type: "PLAY",
    payload: payload,
  });
};

export default Play;
