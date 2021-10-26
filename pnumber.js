const Pnumber = (payload) => (dispatch) => {
  dispatch({
    type: "PNUMBER",
    payload: payload,
  });
};

export default Pnumber;
