const Vewss = (payload) => (dispatch) => {
  dispatch({
    type: "VEWSS",
    payload: payload,
  });
};

export default Vewss;
