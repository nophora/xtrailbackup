


const Comment = (payload) => (dispatch) => {

    dispatch({
        type: 'COMMENT',
        payload: payload,

    })



}

export default Comment;
