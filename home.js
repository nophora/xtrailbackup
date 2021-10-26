const Home = (payload) => (dispatch) => {
  dispatch({
    type: "HOME",
    payload: payload,
  });
};

export default Home;
