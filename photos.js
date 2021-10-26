const Photos = (payload) => (dispatch) => {
  dispatch({
    type: "PHOTOS",
    payload: payload,
  });
};

export default Photos;
