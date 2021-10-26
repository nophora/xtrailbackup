

const Actionmovie = () => dispatch => {

     fetch('http://localhost:8080/xtrail/movieget').then(
         (response) => response.json()).then(data => {
 
   dispatch({

        type: 'MOVIES',
        payload: data,

    })
          
                
         }
 
         ).catch(() => {
              alert('data was not fetch!!!')
         })

   




  

}

export default Actionmovie;
