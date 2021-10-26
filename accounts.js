

const Accounts = () => dispatch => {
   
    fetch('http://localhost:8080/platform/accountget').then(
        (response) => response.json()).then(data => {


      
                dispatch({

                    type: 'ACCOUNTS',
                    payload: data,

                })
        }

        ).catch(() => {
             alert('data was not fetch!!!')
        })


}

export default Accounts