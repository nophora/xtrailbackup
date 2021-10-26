const Photourl = (payload) => (dispatch) => {
  dispatch({
    type: "PHOTOURL",
    payload: payload,
  });
};

export default Photourl;
