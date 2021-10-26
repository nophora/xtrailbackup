

const Selectedvideo = (payload) => (dispatch) => {

    dispatch({
        type: 'SELECTVIDEO',
        payload: payload,
    })
}

export default Selectedvideo;