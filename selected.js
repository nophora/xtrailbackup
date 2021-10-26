const Selected = (payload) => (dispatch) => {
  dispatch({
    type: "SELECTED",
    payload: payload,
  });
};

export default Selected;
