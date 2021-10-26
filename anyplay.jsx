import React, { Component } from 'react'
import './anyplay.css'
import Body from './components/body/body.jsx'
import Genres from './components/body/genres.jsx'
import Action from './components/body/action.jsx'
import Recently from './components/body/recently.jsx'
import Movie from './components/body/movie.jsx'
import Plans from './components/body/plans.jsx'
import Form from './components/body/form.jsx'
import Login from './components/body/login.jsx'
import Search from './components/body/search.jsx'
import Homes from './components/body/home.jsx'
import { ReactComponent as Play } from './components/body/assets/play-button.svg'


import './components/body/movie.css'
import './components/body/genres.css'
import './components/body/body.css'
import './homepage.css'

import Xlogo from './xlogo.png'
import Xtrails from './xtrails.jpg'

import Like from './components/body/uploads/like.png'


import { connect } from 'react-redux'


import {createBrowserHistory} from 'history'

import { BrowserRouter as Router, Link,Switch, Route} from 'react-router-dom'

import Mode from './mode'
import PlayerMode from './play'

import Profile from './profile'
import Account from './account'
import Comment from './comment'
import Selectedvideo from './actionvideo'
import Selected from './selected'
import Actionmovie from './actionmovies'
import Views from './vewss'
import Home from './home'
import Back from './back'
import Photo from './photos'
import Name from './name'


import Sponge from './sponge.jpg'
import Money from './money.jpg'
import Playbtn from './play.png'


import { ReactComponent as User } from './user.svg'


class Anyplay extends Component {
    state = {
        routesch:this.props.anyplay.nav,
        mob:false,
        r:false,
        sidebar:false,
        mode: false,
        more: false,
        seachi: '',
        playermode: this.props.anyplay.play,
        image: this.props.anyplay.profile,
        commentmode: this.props.anyplay.comment,

        zindex:false,
        above: 0,
        
        fullpic:false,

        size: window.innerWidth,
        netwidth:0,
        pinhegt:`${window.innerHeight-37}px`,
        height: window.innerHeight,
        mount:0,
        wallsize:37,
        switch: true,
        mini: false,
        duration: '00:00',
        player: 0,
        play: false,
        full: false,
        opacity: false,
        settings: false,
        viewcomment: [],
        tim:false,
        items: [
            { name: 'mulan', pic: './uploads/mulan.jpg' },
            { name: 'alita', pic: './uploads/alitas.jpg' },
            { name: 'angry birds', pic: './uploads/angry.png' },
            { name: 'everything', pic: './uploads/everything.jpg' },
            { name: 'incredible', pic: './uploads/incer.jpg' },
            { name: 'jumanji', pic: './uploads/juma.jpg' },
            { name: 'lion king', pic: './uploads/lionkig.jpg' },
            { name: 'i still believe', pic: './uploads/belive.jpg' },
            { name: 'mr bean', pic: './uploads/mrbin.jpg' },
            { name: 'after', pic: './uploads/after.jpg' },
            { name: 'kiss', pic: './uploads/kiss.jpg' },
            { name: 'sonic', pic: './uploads/sonic.jpg' },
            { name: 'toy story', pic: './uploads/toy.jpg' },
            { name: 'tom and jery', pic: './uploads/tom.jpg' },
            { name: 'spongebob', pic: './uploads/spong.jpg' },
            { name: 'mulanv', pic: './uploads/mulan.jpg' }

        ],


 slice: 20,
        relise: '',
       

 card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 18, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 118, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
       

url:this.props.anyplay.photos,

        account:this.props.anyplay.account,


        hometop: false,
photoz:3,

        commentr: [],




        rati: [],
        ratifk: [],
        movei: false,
        comment: '',
        c: false,
        replay: [],
        replayfk: [],
        creply: [],
        comz: [],
        rate: 2,
        message: false,
        replyto: ``,

        woning: false,



        movies: this.props.anyplay.movies,
        movieadd:[...this.props.anyplay.movies,...this.props.anyplay.movies,...this.props.anyplay.movies,...this.props.anyplay.movies],
        selected:[],
        selectedmv:{},

        selectvideo: this.props.anyplay.selectvideo,
        recents: [],
        vews: false,
        vewss:this.props.anyplay.vewws,
        vewsv:false,

        name:this.props.anyplay.name,
        pnumber:this.props.anyplay.pnumber,
      

        homeinv:true,

        inpostion:0,
        answer:false,
        nexts:false,
        cancel: false,
        opens:false,
        fount: [],
        found: [],
        mt1: false,
        mt2:false,
        mt3: false,
        mt4:false,


lites:'',
    }



    fullpic = () => {
        this.setState({fullpic:!this.state.fullpic})
    }

homepageinv=(movie)=>{
    this.setState({
    homeinv:false
    })
    window.document.all[9].innerText=`Xtrail`.toUpperCase()
   
const h=false
    this.props.Home(h)
    const back=false
    this.props.Back(back)

    if (this.state.hometop === true) {
        this.setState({
            hometop:false
            })
    }

    const url = './movie/:id' 
    this.props.Photo(url)

    

const m=movie?movie:''

    this.props.Name(m)

    }
    homepageinvbck =() => {
        this.setState({
            homeinv: true
        })
        window.document.all[9].innerText=`Xtrail`.toUpperCase()
   
        const h=true
        this.props.Home(h)
        const back=false
        this.props.Back(back)
        const url = './movie/:id' 
        this.props.Photo(url)
        this.props.Actionmovie()
       setTimeout(() => {
            this.figerscroll()
},100)
   
    }


    chandleScroll = () => {
       
        if (this.state.card.length > this.state.slice && (typeof this.state.relise === 'string' || this.state.relise === true)) {


            this.setState({ relise: false })

            setTimeout(() => {
                this.setState({
                    slice: this.state.slice + 23,
                    relise: true,
        
                })
            }, 3000)
        }

    }



wall=()=>{
    const walss=()=>{
 this.setState({
            wallsize:this.state.wallsize+4,
            pinhegt:`${(this.state.mount-37)-(this.state.wallsize)}px`})
           
    }
     window.addEventListener('resize', walss, false)
}

    size = () => {
        const wide = () => {



       

            this.setState({
                size: window.innerWidth,
                height: window.innerHeight,
              

            })
           }

        window.addEventListener('resize', wide, false)


    }

    hometop = (selected,name) => {

        this.props.Actionmovie()
        window.document.all[9].innerText=`Xtrail-HOME : ${name}`.toUpperCase()
       
        this.setState({
tim:false
        })

        const select = this.state.movies.filter(mv => mv._id === selected);
        const recent = [...this.state.recents, ...select];

        this.setState({
            recents: this.state.recents.length <= 11 ? recent : this.state.recents,
            vews: true,
            selected: select,
            selectedmv: { ...this.state.selectedmv, photo: [] }
        })

        this.props.Selected(select)


        for (let key in select) {
            const {video,comments, genre, name,icon,thumbnail, duration,rate, info, photo}=select[key]
            this.props.Selectedvideo(video)

             const done = [...comments.sort((a, b) => b.date - a.date)];


           

            this.setState({
             commentr: done,
                selectedmv: {
                    name: name,
                    icon: icon,
                    thumbnail: thumbnail,
                    duration: duration,
                    rate: rate,
                    genre:genre,
                    info: info,
                    photo: [...photo],
                }
                
                
                
            } )
        }

        setTimeout(() => {
        this.setState({
            tim:true
        })
    },300)


    const check = this.state.vewss.filter(mv => mv._id === selected);
       
        if (typeof check[0] !== 'object') {
   
            const v = [...this.state.vewss, ...select]
            this.props.Views(v.reverse())
        }
        if (this.state.homeinv=== true) {
            this.setState({
                vewsv:true
               
        
             })
        }

        setTimeout(() => {
           
            this.setState({
                vewsv:false
               
        
             })
        },11000)

        setTimeout(() => {
           
            this.setState({
                vews:false
               
        
             })
        },4000)

        if (this.state.homeinv === true) {
            this.setState({
                hometop: true
          

            })
        }
        if (this.state.homeinv === true) {
       
            setTimeout(() => {
                this.figerscrollm()
            }, 3000)
        }
        setInterval(() => {
            this.setState({
                photoz: this.state.photoz <= -947 ? 3 : this.state.photoz - 100
            })
        },11000)
}

hometops = () => {
      

    const done = [...this.state.commentr.sort((a, b) => a.date - b.date)];

    window.document.all[9].innerText=`XTRAIL`
    this.setState({
       hometop:false,
       commentr: done,

    })
}

figerscrollm = () => {

    const srroll = document.querySelectorAll('.box-of-scrl9 ')
      

    const handleScroll = () => {
        const srrolly = document.querySelectorAll('.box-of-scrl9 ')
       
        const ypostion =srrolly[0].scrollTop ;
        const answer = ypostion < this.state.inpostion;

        this.setState({
            answer,
            inpostion: ypostion
        });
       
    }

    srroll[0].addEventListener('scroll', handleScroll, false);
    return () => {   srroll[0].removeEventListener('scroll', handleScroll, false); }

    }
    





    figerscroll = () => {


        if (this.state.size > 620) {
           
        const srroll = document.querySelectorAll('.homepage-movies ')
               
      

        const chandleScroll = () => {

            if (this.state.size > 620) {
                const srrolly = document.querySelectorAll('.homepage-movies ')
       
       
                const add = srrolly[0].scrollHeight - srrolly[0].clientHeight
  
                if (add === srrolly[0].scrollTop && this.state.card.length > this.state.slice && (typeof this.state.relise === 'string' || this.state.relise === true)) {
    
    
                    this.setState({ relise: false })
    
                    setTimeout(() => {
                        this.setState({
                            slice: this.state.slice + 23,
                            relise: true,
                        })
                    }, 3000)
                }
            }
            }
       

            srroll[0].addEventListener('scroll', chandleScroll, false);
            return () => { srroll[0].removeEventListener('scroll', chandleScroll, false); }

        }
    }


    componentDidMount() {
        this.wall()
        this.size()
        this.figerscroll()
      this.setState({mount:window.innerHeight})
      
        setInterval(() => {
            this.setState({
                swipe: !this.state.swipe
            })
        }, 15000)

        this.props.Actionmovie()
      



        const data = JSON.parse(localStorage.getItem('accont'));
 
        const anyway=  data !== null
       
       
        if(anyway){
          this.props.Profile(data[0].image)
          this.props.Account(data)
        }


       
    }

    switch = () => {
        this.setState({
            switch: !this.state.switch
        })
    }
    mob= () => {
        this.setState({
            mob: !this.state.mob
        })
    }

    leftphoto= () => {
        this.setState({
            photoz: this.state.photoz >= 100 ? 3 : this.state.photoz + 100
        })

    }
    rightphoto = () => {
        this.setState({
            photoz: this.state.photoz <= -953 ? 3 : this.state.photoz - 100
        })

    }

    sidebar = () => {
        if (this.state.mob === true) {
            this.mob()
        }
        setTimeout(() => {
            this.setState({
                sidebar: !this.state.sidebar
            })
        },800)
        this.setState({
            r: !this.state.r
        })
    }

    

    close = () => {
        const play =this.state.playermode===true?false:true
        this.props.PlayerMode(play)
        this.setState({
            full: false,
            mini: false,
           
        })
    }


   

    sechrout = () => {
        const back=false
        this.props.Back(back)
        const h=false
        this.props.Home(h)
    }

    settings = () => {
        this.setState({
            settings: !this.state.settings
        })
        const back=false
        this.props.Back(back)
       

      
    }
    settings2 = () => {
        this.setState({
            settings: !this.state.settings
        })
        if (this.state.homeinv === true) {
            this.homepageinv()
        }
    }
    differ = () => {
        const pic = '';
        const user = [];

        this.setState({
            settings: !this.state.settings
        })
        this.props.Profile(pic)
        this.props.Account(user)
        localStorage.removeItem('accont')
    }

    outmobil = () => {
        const pic = '';
        const user = [];

        this.props.Profile(pic)
        this.props.Account(user)
        localStorage.removeItem('accont')
    }

    mini = () => {
        this.setState({
            opacity: false,
            mini: !this.state.mini
        })
    }

    full = () => {
        this.setState({
            full: !this.state.full
        })
    }

    mode = () => {

      let ui=window.document.all[0].style.backgroundColor

      window.document.all[0].style.backgroundColor=ui==="black"?"white":"black"
        this.setState({
            mode: !this.state.mode
        })
        setTimeout(() => {
           
            this.props.Mode(this.state.mode)
        }, 30)


        setTimeout(() => {
            this.setState({
                more: false
            })
        }, 50)

    }
    more = () => {
            this.setState({
                more: !this.state.more
            })
        

    }




    //CHAT ROOM CODE

    backfilter = () => {
        this.setState({
            viewcomment: [],
            c: !this.state.c,
            comment: '',
        })
    }

    backfilterin = (f) => {
        const comers = this.state.commentr.filter(e => { return e.id === f })
        this.c(f)
        this.setState({
            viewcomment: comers
        })
    }




//CREATE COMMENT
    onSubmit = event => {
        event.preventDefault();

        if (typeof this.state.account[0] === 'object') {

            const date = new Date();
            const hour = date.getHours();
            const min = date.getMinutes()

            const create_comment = {
                id: Math.random(),
                date: Date.now(),
                user: !this.state.c && this.state.account,
                time: `${hour}:${min <= 9 ? '0' : ''}${min}`,
                comment: !this.state.c && this.state.comment,
                rate: [],

                replys: [
                    {
                        id: Math.random(),
                        date: 1591104458239,
                        time: `${hour}:${min <= 9 ? '0' : ''}${min}`,
                        user: [{
                            image:`https://res.cloudinary.com/platformtour/image/upload/v1634724801/tr_ryv2qg.png`,
                            user_name: 'xtrail',
                            user_lastname: 'movies',
                            user_email: 'movies@xtrail.com',
                            user_password:'xtrail',
                        }],
                        reply: `i guess am the first to comment, Take care`

                    }
                ],

            };

            const sending = {
                type: 'comment',
                mission:'comment',
                payload: create_comment
            }

           

            fetch(`http://localhost:8080/xtrail/movie_rate/${this.state.selected[0]._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(sending)
    
            }).then((response) => response.json()).then(
                data => {
                    const sortmobl = data.comments
          
                    const done = [...sortmobl.sort((a, b) => b.date - a.date)]
                    const donex = [...sortmobl.sort((a, b) => a.date - b.date)]
                    const donesort = this.state.hometop === true ? done : donex

                    this.setState({
                        selected: [data],
                        comment: '',
                        commentr: donesort,
                    })

                    if (this.state.hometop === false) {
                        setTimeout(() => {
                            const gabh = document.querySelectorAll('.comment-scroll')
                            const gabt = document.querySelector('.comment-scroll')

                            gabt.scrollTo({
                                behavior: 'smooth',
                                top: gabh[0].scrollHeight
                            })
                        }, 1500)
                    } else {
                        setTimeout(() => {
                            const gabt = document.querySelector('.mobx-scroll')
    
                            gabt.scrollTo({
                                behavior: 'smooth',
                                top: 0
                            })
                        }, 1500)
                    }

            }).catch(console.log('Oops something went wrong on comment'))


        } else {

            this.setState({
                comment: '',
                woning: true
            })

            setTimeout(() => {
                this.setState({
                    woning: false
                })
            }, 6000)

        }
    }

//RATING_MOVIE
    movie_rate = () => {
        
       
        if (typeof this.state.account[0] === 'object') {
       

        const sending = {
            type: 'rate',
            mission:'rating',
            payload:this.state.account 
        }

       
            fetch(`http://localhost:8080/xtrail/movie_rate/${this.state.selected[0]._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(sending)

            }).then((response) => response.json()).then(
                data => {
                    this.setState({
                        selected: [data],
                    })
                })

            } else {

                this.setState({
                    comment: '',
                    woning: true
                })
    
                setTimeout(() => {
                    this.setState({
                        woning: false
                    })
                }, 6000)
    
            }

    }



    reate = (select) => {

        if (typeof this.state.account[0] === 'object') {


            const sending = {
                type: 'rate',
                mission:'comment',
                payload: this.state.account,
                selected:select
            }

        fetch(`http://localhost:8080/xtrail/movie_rate/${this.state.selected[0]._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sending)

        }).then((response) => response.json()).then(
            data => {
            
                const newrate = data.comments
                const done = [...newrate.sort((a, b) => b.date - a.date)]
         
                const sort = [...newrate.sort((a, b) => a.date - b.date)]
                const donesort = this.state.hometop === true ? done : sort

                this.setState({
                    commentr: donesort

                })

                if (typeof this.state.viewcomment[0] === 'object') {

                    const v_comment=data.comments.filter(e=>e._id===this.state.viewcomment[0]._id)
                    this.setState({
                        viewcomment:v_comment 

                    })
                }


            } ).catch(console.log('error occares in rate'))
    }



        else {



            this.setState({
                comment: '',
                woning: true
            })

            setTimeout(() => {
                this.setState({
                    woning: false
                })
            }, 6000)


        }

    }






    reply = () => {

        if (typeof this.state.account[0] === 'object') {

          //  const { selected:[{_id}] } = this.state;
            const date = new Date();
            const hour = date.getHours();
            const min = date.getMinutes()



            this.setState({
                creply: [{
                    id: Math.random(),
                    date: Date.now(),
                    time: `${hour}:${min <= 9 ? '0' : ''}${min}`,
                    user: this.state.c && this.state.account,
                    reply: this.state.c && this.state.comment,

                }],
            })
//REALLYRELAY
/*
setTimeout(() => {
    const { replay, replay: [{ replys }] } = this.state;
    for (let key in replay) {
        if (key !== 'replys') {
            const rep = replay[key];
            const them = [...replys, ...this.state.creply];
            const sor = [...them.sort((a, b) => b.date - a.date)]

            this.setState({ replay: [{ ...rep, replys: sor }] })

        }
    }
}, 70)



setTimeout(() => {

    const comfus = [...this.state.notreply, ...this.state.replay];
    const sorcom = [...comfus.sort((a, b) => a.date - b.date)];

    this.setState({ comz: sorcom })
}, 100)

 //wating for MongoDB request
setTimeout(() => {
    for (let key in this.state.selected) {
        this.setState({
            selected: [{ ...this.state.selected[key], comments: this.state.comz }],
            
        })

        fetch(`http://localhost:8080/platform/movieput/${`${_id}`}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state.selected[key])

        }).then((response) => response.json()).then(
            data => {
            
                 this.setState({
                    selected: [data],
                  
                })


              }
        ).catch(console.log('error occares in form'))


    }
    

}, 105)
*/
            





            //FAKE REPLAY
            setTimeout(() => {
                const { replayfk, replayfk: [{ replys }] } = this.state;
                for (let key in replayfk) {
                    if (key !== 'replys') {
                        const rep = replayfk[key];
                        const them = [...replys, ...this.state.creply];
                        const sor = [...them.sort((a, b) => b.date - a.date)]

                        this.setState({ replayfk: [{ ...rep, replys: sor }] })

                    }
                }
            }, 70)



            setTimeout(() => {

                const comfus = [...this.state.notreplyfk, ...this.state.replayfk];
                const sorcom = [...comfus.sort((a, b) => a.date - b.date)];
                const done = [...comfus.sort((a, b) => b.date - a.date)];


                const donesort = this.state.hometop === true ? done :sorcom


                this.setState({
                    commentr: donesort,
                    comment: '',

                })



                if (typeof this.state.viewcomment[0] === 'object') {

                    this.setState({
                        viewcomment: this.state.replayfk

                    })
                }





            }, 100)




        }
        else {


            this.setState({
                comment: '',
                woning: true
            })

            setTimeout(() => {
                this.setState({
                    woning: false
                })
            }, 6000)




        }

    }



    c = (select) => {
        const { commentr,selected: [{ comments }] } = this.state;

        const reply = comments.filter(e => { return e.id === select });
        const notrepl = comments.filter(n => { return n.id !== select });
       

        const replyfk = commentr.filter(e => { return e.id === select });
        const notreplfk = commentr.filter(n => { return n.id !== select });
        this.setState({
            c: !this.state.c,
            replay: reply,
            notreply: notrepl,
            replayfk: replyfk,
            notreplyfk: notreplfk,
            message: true,
            comment: '',
        })
        setTimeout(() => {
            const { replayfk: [{ user: [{ user_name , user_lastname }] }] } = this.state;
            this.setState({
            replyto: `${user_name} ${user_lastname}`,
            })


        }, 50)

    }












    //VIDEO CODE...



    duration = () => {
        const player = document.querySelector('.video-thembnail-play');
        const time = player.currentTime / player.duration * 100;
        const d = player.currentTime;
        const m = Math.floor(d / 60);
        const min = (m >= 10) ? m : "0" + m;
        const s = Math.floor(d % 60);
        const sec = (s >= 10) ? s : "0" + s;
        if (time === 100) {
            this.setState({
                opacity: false,
            })
        }

      
        this.setState({
            duration: `${min}:${sec}`,
            player: time,

        })

        if (player.currentTime === player.duration) {

            const select =this.state.selected
            for (let key in select) {
                const { name } = select[key]
                    
                const numb=this.state.movies.findIndex(e=> e.name === name)

                const next=this.state.movies[numb+1>=this.state.movies.length?0:numb+1]
               
                  
                   
                    const found=this.state.movies.filter(mv => mv._id === next._id);
                    const fount=this.state.movies.slice(numb>=this.state.movies.length?0:numb+2,numb>=this.state.movies.length?4:numb+5)
                   
                    this.setState({
                        fount: fount,
                        found: found,
                        opens:true
                    })

                    setTimeout(() => {
                        this.setState({
mt1:true
                        })
                    },1000)
                    setTimeout(() => {
                        this.setState({
mt2:true
                        })
                    },4000)
                    setTimeout(() => {
                        this.setState({
mt3:true
                        })
                    },7000)
                    setTimeout(() => {
                        this.setState({
mt4:true
                        })
                    },9000)

                setTimeout(() => {
                    if (this.state.cancel === false) {
                        this.setState({
                            nexts: true,
                            opens: false
                        })
                    }
                            setTimeout(() => {
                                if (this.state.nexts === true) {
                                    this.hometop(next._id)
                                    setTimeout(() => {
                                        this.setState({
                                            nexts: false,
                                            mt1: false,
                                            mt2:false,
                                            mt3: false,
                                            mt4:false,
                                        })
                                    },100)

                                }
                            },1000)
                        }, 12000)
                
            }
        }


    }

    cancel = () => {
       

        this.setState({
            nexts: false,
            cancel: true,
            opens: false,
            mt1: false,
            mt2:false,
            mt3: false,
            mt4:false,
        })
        setTimeout(() => {
            this.setState({
                cancel: false
            })
        },1000)
            }
                





    mousemove = () => {
        if ((this.state.player !== 100 || this.state.play === true) && this.state.mini === false) {
            setTimeout(() => { this.setState({ opacity: this.state.mini === true ? false : this.state.player === 100 ? false : this.state.play === false && true }) }, 20000)
            this.setState({
                opacity: this.state.mini === true && false,
            })
        }
    }


    outplay = () => {
        setTimeout(() => { this.setState({ opacity: this.state.play === false && true }) }, 2000)
        this.setState({
            autoplay: !this.state.autoplay
        })
    }

    setdur = (e) => {
        const hover = Math.floor(e.nativeEvent.offsetX / this.refs.size.clientWidth * 100) + 10;
        this.setState({
            player: hover,
        })
        const player = document.querySelector('.video-thembnail-play');
        return player.currentTime = hover + 20;
    }

    play = () => {
        this.setState({
            play: !this.state.play
        })

        const player = document.querySelector('.video-thembnail-play')

        setTimeout(() => { this.setState({ opacity: this.state.play === false && true }) }, 20000)

        return this.state.play === false ? player.pause() : player.play();
    }

    next = () => {

        const player = document.querySelector('.video-thembnail-play');
        return player.currentTime += 4;
    }
    prev = () => {

        const player = document.querySelector('.video-thembnail-play');
        return player.currentTime -= 4;
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                routesch:nextProps.anyplay.nav,
                commentmode: nextProps.anyplay.comment,
                account: nextProps.anyplay.account,
                mode: nextProps.anyplay.mode,
                playermode: nextProps.anyplay.play,
                image: nextProps.anyplay.profile,
                movies: nextProps.anyplay.movies,
                selected: nextProps.anyplay.selected,
                homeinv: nextProps.anyplay.home,
                vewss:nextProps.anyplay.vewss,
                selectvideo: nextProps.anyplay.selectvideo,
                url: nextProps.anyplay.photos,
                movieadd:[...nextProps.anyplay.movies,...nextProps.anyplay.movies,...nextProps.anyplay.movies,...nextProps.anyplay.movies]
           
            })
        }


          if (nextProps.anyplay.name) {
            this.setState({
                name:nextProps.anyplay.name
            })

          }
          if (nextProps.anyplay.pnumber) {

            this.setState({
                pnumber:nextProps.anyplay.pnumber
            })
          }

      
    }

    comments = () => {
        const comentr = false
        this.props.Comment(comentr)
        this.setState({
            replyto: ``,
            c: false,
        })
    }

    leaveseach = () => {
        this.setState({
            seachi: ''
        })
    }
    zindex = (name) => {
        this.setState({
            zindex:true
        })

        const numb=this.state.selectedmv.photo.findIndex(e=> e === name)

        this.setState({above:numb})

    }

    zindexx = () => {
        this.setState({
            zindex:false
        })
    }

aboveleft=()=>{
    this.setState({
        above:this.state.above>=this.state.selectedmv.photo.length?0: this.state.above+1
    })
}

aboveright=()=>{
    this.setState({
        above:this.state.above<=0?this.state.selectedmv.photo.length:this.state.above-1
    })
}

    handleSeach = event => {
        this.setState({ seachi: event.target.value })
    }
    comment = event => {
        this.setState({ comment: event.target.value })
    }



    routing = (selected) => {
        const select = this.state.movies.filter(mv => mv.name === selected);

        this.props.Selected(select)

        const check = this.state.vewss.filter(mv => mv.name === selected);


        if (typeof check[0] !== 'object') {
            const v = [...this.state.vewss, ...select]
            this.props.Views(v)
        }
        const n = selected

        this.props.Name(n)

   }


     

    render() {
        const search = this.state.movies.filter(f => { return f.name.toLowerCase().indexOf(this.state.seachi.toLowerCase()) !== -1; });

   



     const date = new Date();
     const year = date.getFullYear()
     const hour = date.getHours();
       
        const History=createBrowserHistory()
        return (
            <Router history={History} >
                <div className={this.state.mode === false ? "mode-UI-Light" : "mode-UI-Black"}>
                    <Switch>

                        <Route path="/genres"   exact component={Body} />
                        <Route path="/shows"  exact   component={Body} />
                        <Route path="/popular_movies"  exact component={Genres} />
                        <Route path="/genres"  exact component={Action} />
                        <Route path="/recently"  exact component={Recently} />
                        <Route path="/plans"  exact component={Plans} />
                        <Route path="/form" exact component={Form} />
                        <Route path="/login"  exact component={Login} />
                        <Route path="/search"  exact component={Search} />
                        <Route  path={this.state.url==='./movie/:id/photo/:id'?`/:id`:`/:id`} exact  component={Movie} />
                       
                        <Route path="/" exact component={this.state.size>620?Homes:Body} />

                       
                    </Switch>


                    {this.state.size > 620 &&this.state.homeinv===true&&  <div style={{filter:this.state.zindex&&'blur(11px)', height: `${(window.innerHeight) - 16}px` }} className="homepage">
                        <div   className="homepage-movies">
                            <div className="homepage-movies2">
                           

                                <div  className="only-u">

                                {this.state.r===false?<div  style={{backgroundImage:`url(${hour>19?Money:Sponge})`,}}  className='netflixt'>
                                        <div className="fadeblack"></div>
                                        <div style={{width:(this.state.size<950&&this.state.hometop)&&'260px',height:(this.state.size<950&&this.state.hometop)?'140px':(this.state.size<930||this.state.hometop)&&'260px', marginLeft:this.state.hometop?`-${this.state.size-400}px` :`-${this.state.size-100}px`}} className="block-info" >
                                            <div className="this-week1">
                                                <img src={Xlogo} alt='walls' className="walls-img" />
                                                <span className="this-week-str">FILM</span>
                                            </div>
                                            <div style={{marginTop:(this.state.size<950&&this.state.hometop)?'0px':(this.state.size<930||this.state.hometop)&&'3%'}} className="this-week2">
                                            <span style={{fontSize:(this.state.size<950&&this.state.hometop)?'8px':(this.state.size<930||this.state.hometop)&&'13px'}} className="this-week-str2">Most Streamed This Week</span>
                                            </div>
                                            <div style={{marginTop:(this.state.size<950&&this.state.hometop)?'3%':(this.state.size<930||this.state.hometop)&&'5%'}} className="this-week3">
                                            <span style={{fontSize:(this.state.size<950&&this.state.hometop)?'8px':(this.state.size<930||this.state.hometop)&&'10px'}} className="this-week-str2">{hour>19?'Money Heist':'The SpongeBob Movie: Sponge on the Run'}</span>
                                            </div>
                                            <div style={{marginTop:(this.state.size<950&&this.state.hometop)&&'0%'}} className="this-week4">

                                            <div className="genrd">
                                            <span style={{fontSize:(this.state.size<950&&this.state.hometop)?'5px':(this.state.size<930||this.state.hometop)&&'10px'}} className="diffine-genrd">{hour>19?'Crime TV Shows':'Family Features'}</span>
                                            </div>

                                            <div style={{marginTop:(this.state.size<950&&this.state.hometop)&&'1%',width:(this.state.size<950&&this.state.hometop)&&'20px',height:(this.state.size<950&&this.state.hometop)&&'8px'}} className="genrd1">
                                            <span style={{fontSize:(this.state.size<950&&this.state.hometop)&&'5px'}}  className="diffine-genrd">{hour>19?'16':'PG'}</span>
                                            </div>

                                            <div className="genrd">
                                            <span style={{fontSize:(this.state.size<950&&this.state.hometop)?'5px':(this.state.size<930||this.state.hometop)&&'10px'}} className="diffine-genrd">{hour>19?'5 Seasons':'1h 35m'}</span>
                                            </div>

                                            </div>
                                            <div style={{marginTop:(this.state.size<950&&this.state.hometop)&&'0%'}} className="this-week5">
                                                <span style={{fontSize:(this.state.size<950&&this.state.hometop)?'5px':(this.state.size<930||this.state.hometop)&&'10px'}} className="this-week-str2">{hour>19?'Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan':'When his best friend Gary is suddenly snatched away, SpongeBob takes Patrick on a madcap mission far beyond Bikini Bottom to save their pink-shelled pal'}</span>
                                            </div>
<div style={{marginTop:(this.state.size<950&&this.state.hometop)?'-8%':(this.state.size<930||this.state.hometop)&&'3%'}} className="this-week6">
<span className="week6-span">Watch</span>
<img src={Playbtn} alt='walls' className="wall-play" />
                                                
</div>

                                        </div>
                                  </div>:
                                        <div style={{backgroundImage:`url(${Xtrails})`,}} className="xtrail-log">
                                             
                                   
                                  </div>
                                  
                                  }
                                    
                                       
                                </div>

                            
                                <div className="home-chosse-v">
                                    <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="home-div-weg">latest updates</div>
                                    <div className="home-div-wra">

                                        {this.state.movieadd.slice(0, this.state.slice).map((e,i) => {

                                            return (<div onClick={()=>{this.hometop(e._id,e.name)}} key={i} className="anda">
                                                <img src={e.icon} alt='watch' className='anda-img' />
                                                <div className="anda-info">

                                                    <div style={{textTransform: 'uppercase',}} className="anda-name">{e.name.slice(0, 11)}</div>
                                                    <div className="anda-wrap-info">
                                                    {e.info.slice(0, 58)}
                                                              
        
                                                </div>
                                                </div>
                                            
                                            </div>)
                                        })}





                                        
                                    </div>



                                    <div className="yhooy">
                          
                                        {this.state.relise === false && <div className='load-infinity'></div>}
                          



                                    </div>






                                    
                                </div>


                            </div>
                        </div>
                        {this.state.hometop &&<div className="homepage-selected">
                            <div className="home-backj">
                            <div onClick={this.hometops} className="back-boxix2">
                                        <div className="x1"></div>
                                        <div className="x2"></div>
                                    </div>
                            </div>

                            <div className="box-of-scrl9">
                                <div className="smt">
                                  
                                
                                <div style={{ height:'200px', width:'100%'}} className="video-detail-wrap">
                        <img style={{ height: '200px', width:'100%' }} src={this.state.selectedmv.thumbnail} alt='mulan' className='video-thembnail-m' />
                        <div style={{  marginTop:'-200px', height: '200px' }} className="video-info-faide-m">
                            <div className="icon-and-details-m">
                                <Play onClick={this.close} className='play-button' />

                            </div>
                            <div className="icon-and-details">
                                <div className="icon-pic">
                                    <img src={this.state.selectedmv.icon} alt='mulan' className='video-thembnail-icon' />
                                </div>
                                <div className="detail-force">
                                    <div className="over-lap-detail">
                                                        <h1 style={{ fontSize: '200%',textTransform: 'uppercase',width: 'max-content' }} className="over-h">{this.state.selectedmv.name.slice(0,11)}</h1>
                                        <p style={{ fontSize: "50%" }} className="over-psV">{`${this.state.selectedmv.duration.hour}hr ${this.state.selectedmv.duration.min}min`}</p>
                                        <p style={{ fontSize:"50%" }} className="over-ps">Year-2020</p>
                                        <div style={{marginLeft: '0%'}} className="disney">
                                            <p style={{ fontSize:  "50%" }} className="over-ps">Xtrail</p>
                                            <div className="blockbr"></div>
                                            <p style={{ fontSize:"50%" }} className="over-prz">{this.state.selectedmv.genre}</p>
                                        </div>


                                    </div>

                                    <div className="picture-share">
                                        <div className="inshare-pc">

                                            <img onClick={this.ratem} src={'./uploads/star.png'} alt='mulan' className='inshare-png' />
                                            <img src={'./uploads/tag.png'} alt='mulan' className='inshare-png' />
                                            <img src={'./uploads/share.png'} alt='mulan' className='inshare-png' />
                                            <img src={'./uploads/download.png'} alt='mulan' className='inshare-png' />



                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="mobile-views">
                        <div className="word-mob">
                            <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="wo">views</p>
                            <p className="wo2">278</p>
                                            {this.state.woning===false?<img src={Like} onClick={this.movie_rate} style={{ marginLeft: '20px', filter: this.state.mode === true ? 'invert(0%)' : 'invert(100%)' }} alt='like' className="like-btn-img" />:<div className="like-worn"><span>please login first</span></div>}
                                            {this.state.woning===false&&<p className="wo2">{`${78}%`}</p>}
                        </div>
                        <div className="view-mobile">
                            <div className="mv1m">
                                <div className="mv1m2">
                               
                                    

                                </div>
                            </div>
                        </div>
</div>



                    <div className="mobile-infom">
                        <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="about-mon">INFO</div>
                        <div className="about-mob-info">
                            <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>
                          {this.state.selectedmv.info.slice(0,216)}
                            </p>
                        </div>
</div>


                                    <div className="photo-stock">
                                        
                                        <div style={{
                                color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' 
                                ,
                                        }}  className="photz">Photos</div>
                                        <div className="photz-wrap">

                                            <div className="retive-wrap">
                                                <div className="most-rel">
                                                {this.state.tim&& this.state.selectedmv.photo.map((e,i) => {

return (<div style={{
    overflowX:'hidden', left: `${this.state.photoz}px`
}}
    onClick={() => { this.zindex(e) }} key={i} className="most-box">
                                                    <img style={{width:'max-content'}} src={e} alt='mulan' className='photcz' />
                               </div> )
                                        })}
 
                                                </div>
</div>

                                        </div>
                                        <div style={{border: this.state.mode === true &&'2px solid rgb(255, 0, 200)'}} onClick={this.leftphoto}className="right-bizz">

                                        <img src={'./uploads/goleft.png'} alt='mulan' className='goto' />
             
                                        </div>
                                        <div style={{border: this.state.mode === true &&'2px solid rgb(255, 0, 200)'}} onClick={this.rightphoto} className="right-bizz2">
                                        <img src={'./uploads/goright.png'} alt='mulan' className='goto' />
             
                                        </div>
</div>


                                    

                    <div className="mobile-chatroom">
                        <div className="size-chats">
                            <p style={{
                                color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' 
                                ,
                            }}>view comments</p>
                               
                        </div>
                        <div className="mobile-inside-chat">
                            <div className="mobx-scroll">
                                <div className="mob-scrl2">

                                {typeof this.state.viewcomment[0] !== 'object' && this.state.commentr.map(f => {
                                    return (<div style={{ border: this.state.mode === true && '1px solid #fff'}} key={f.id} className="mobl-chat-box">
                                  {f.user.map(u => {
                                                    return (<div key={u.image} className="mobile-name-box">
                                    <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`${u.user_name.slice(0, 8)} ${u.user_lastname.slice(0, 8)}`}</p>
                                    <img src={u.image} alt='mulan' className='jg-bx' />
                            </div>)
                                                })}

                                <div className="mobil-bx-x">
                                <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`${f.comment.slice(0, 60)}${f.comment.length >= 60 ? '...more' : ''}`} </p>
                                
                                
                                </div> 
                                <div className="mobil-reaction">
                                <img onClick={() => { this.reate(f.id) }} src={'./uploads/love.png'} alt='mirs' className='ui-love-alita' />
                                                    <p className="vi">{f.rate.length}</p><p onClick={() => { this.c(f.id) }} className="vi32">reply</p><p onClick={() => { this.backfilterin(f.id) }} className="vi32">more</p><p className="vi2">{f.time}</p>
                                               
                                    
                                </div>
                                {f.replys.slice(0, 1).map((e,i) => {
                                                    return ( <div key={i} onClick={() => { this.backfilterin(f.id) }} className="mobile-reply">
                                 {e.user.map(e => { return (<img key={e.image} src={e.image} alt='mulan' className='jg-cz' />) })}
                                    <div className="for-sure">
                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`${e.reply.slice(0, 14)}${e.reply.length >= 14 ? '...' : ''}`}</p> <p className="for">{e.time}</p>
                           </div>
                                </div> )
                                                })}
                                    </div> )
                                        })}





{typeof this.state.viewcomment[0] === 'object' && this.state.viewcomment.map(f => {
                                    return (<div style={{ height: 'max-content', border: this.state.mode === true && '1px solid #fff'}} key={f.id} className="mobl-chat-box">
                                  {f.user.map(u => {
                                                    return (<div key={u.image} className="mobile-name-box">
                                    <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`${u.user_name.slice(0, 8)} ${u.user_lastname.slice(0, 8)}`}</p>
                                    <img src={u.image} alt='mulan' className='jg-bx' />
                            </div>)
                                                })}

                                <div style={{ height: 'max-content' }}   className="mobil-bx-x">
                                <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`${f.comment}`} </p>
                                
                                
                                </div> 
                                <div className="mobil-reaction">
                                <img onClick={() => { this.reate(f.id) }} src={'./uploads/love.png'} alt='mirs' className='ui-love-alita' />
                                                    <p className="vi">{f.rate}</p><p onClick={() => { this.c(f.id) }} className="vi32">reply</p><p onClick={this.backfilter} className="vi32">BACK</p><p className="vi2">{f.time}</p>
                                               
                                    
                                </div>
                                {f.replys.map(e => {
                                                    return ( <div style={{ flexDirection: 'column' ,height: 'max-content' }} key={e.time}  className="mobile-reply">
                               
                                 <div className="dives">
                                                            {e.user.map(e => { return (<img key={e.image} src={e.image} alt='mirs' className='jg-cz' />) })}
                                                            {e.user.map(e => { return (<p key={e.user_name} style={{ marginLeft: '-44px', fontWeight: 'bold' }} className="vi32"> {`${e.user_name.slice(0, 8)} ${e.user_lastname.slice(0, 8)}`}</p>) })}
                                                            <p className="vi32">{e.time}</p>

                                                        </div>
                                                       
                                                       
                                        <p style={{marginLeft: '3%', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`${e.reply}`}</p>
                          
                                </div> )
                                                })}
                                    </div> )
                                        })}




                                    
                                    
                                    </div>
                            </div>
</div>
                                        <div className="chatmko">
                                            
                                        Privacy  · Terms  · Advertising  · Ad Choices   · Cookies  · XTrail ©{year}
                            
                            
</div>
                    </div>



                   


                    <div style={{height:'80px'}} className="mobile-epersode">

                    

                    </div>





                    {this.state.answer === false && this.state.inpostion > 100 && <div style={{ left:`${this.state.size - 345}px`, width:'328px'}} className="mobile-send-comet">

<div style={{ width: '90%', background: this.state.woning === true ? 'linear-gradient(rgb(255, 0, 0),rgb(255, 0, 0))' : this.state.comment.length >= 1 ? ' linear-gradient(150deg,rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255))' : 'linear-gradient(150deg, rgb(255, 0, 255), rgb(250, 91, 255), rgb(255, 82, 226), rgb(255, 54, 211), rgb(252, 45, 200))' }} className="send-box-size">
    <div className="inputsend">
        <input value={this.state.comment} onChange={this.comment} placeholder={this.state.woning === true ? 'please login first' : this.state.c === false ? 'comment...' : `reply to...${this.state.replyto}`} className={this.state.woning === true ? 'search-placew' : 'search-place'} />
    </div>
    <div style={{ width: '35px', height: '35px' }} onClick={this.state.c === false ? this.onSubmit : this.reply} className="sendbottun-wrrap">
        <img src={'./uploads/send.png'} alt='mors' className='ui-send' />
    </div>
</div>


</div>}

                 
                                
                                
                                
                                
                                
                                </div>
</div>

                        </div>}

                        
                    </div>}




                    {this.state.size>620&&this.state.seachi.length > 0 && <div onMouseLeave={this.leaveseach} style={{filter:this.state.zindex&&'blur(11px)' ,left: `${this.state.size - 370}px` }} className="seach-div">
                        <div className="seach-concrol">
                            <div className="seach-concrol-2">


                                {this.state.seachi.length > 0 && typeof search[0] !== 'object' ?

                                    <div className="items-in-seach-v">
                                        <h1 className="items-in-seach-v2"> MOVIE NOT FOUND</h1>
                                    </div>
                                    : search.map((e,i)=> {
                                        return (
                                            <Link onClick={() => { this.routing(e.name) }} style={{ color: 'rgb(0,0,0)', textDecoration: 'none', }} to={`/${e.name}`}>
                                            
                                            <div key={i} className="items-in-seach">
                                                <img src={e.icon} alt='mors' className='ui-image-seach' />
                                                <div className="boxg1">
                                                    <span className="bx1">{e.name}</span>
                                                    <span style={{marginTop:'5px'}} className="bx2">{e.info.slice(0,24)}</span>
                                                </div>
                                            </div>
                                                   </Link>
                                     

                                        )
                                    })}


                            </div>
                        </div>
                    </div>}




                    {this.state.size>620&&this.state.settings === true && <div onMouseLeave={this.settings} style={{ filter:this.state.zindex&&'blur(11px)',height: this.state.image.length < 1 && '40px', left: `${this.state.size - 120}px` }} className="settings">
                        {this.state.image.length < 1 && <Link style={{ marginTop: '1.5%', width: '90%', height: '14px', textDecoration: 'none' }} to='/form'>
                            <div onClick={this.settings2} className="bock-text-log">
                                <span>signup</span>
                            </div>
                        </Link>}
                        {this.state.image.length < 1 && <Link style={{ marginTop: '1.5%', width: '90%', height: '14px', textDecoration: 'none' }} to='/login'>
                            <div onClick={this.settings2} className="bock-text-log">
                                <span>login</span>
                            </div>
                        </Link>}
                        {this.state.image.length > 2 && <Link style={{ marginTop: '1.5%', width: '90%', height: '14px', textDecoration: 'none' }} >
                            <div onClick={this.differ} className="bock-text-log">
                                <span>logout</span>
                            </div>
                        </Link>}
                        
                       


                    </div>}






                    {this.state.size>=620&&this.state.hometop===false&&this.state.commentmode === true && <div style={{ height: this.state.height <= 550 ? '370px' : '450px' ,left: `${this.state.size - 320}px`, top: `${this.state.height - (this.state.height <= 550 ? 390 : 480)}px` }} className="chatroom">
                        <div className="chatbox-size">




                            <div className="switch2">
                            {this.state.selected.map(u => {
                                                    return (<div className="switch-info">
                                    <img key={u.icon} src={u.icon} alt='mirs' className='ui-sendin' />
                            <h1 className="back-had" key={u.name} >{u.name}</h1>
                                    <div onClick={this.comments} className="back-boxix">
                                        <div className="x1"></div>
                                        <div className="x2"></div>
                                    </div>
                                </div>)
                                                })}
                                <div className="line"></div>
                                <div className="comment-scroll">
                                    <div className="comment-scroll-2">

                                        {typeof this.state.viewcomment[0] !== 'object' && this.state.commentr.map(f => {
                                            return (<div key={f.id} className="i-come-box">
                                                {f.user.map(u => {
                                                    return (<div key={u.image} className="amazing-work">
                                                        <p className="amaz">{`${u.user_name.slice(0, 8)} ${u.user_lastname.slice(0, 8)}`}</p>
                                                        <img src={u.image} alt='mirs' className='ui-sendi-alita' />

                                                    </div>)
                                                })}
                                                <div className="afrikan">
                                                    <p>{`${f.comment.slice(0, 90)}${f.comment.length >= 90 ? '...more' : ''}`}</p>
                                                </div>
                                                <div className="video-love">
                                                    <img onClick={() => { this.reate(f.id) }} src={`https://res.cloudinary.com/platformtour/image/upload/v1634259688/love_vswcq6.png`} alt='mirs' className='ui-love-alita' />
                                                    <p className="vi">{f.rate}</p><p onClick={() => { this.c(f.id) }} className="vi3">reply</p><p onClick={() => { this.backfilterin(f.id) }} className="vi3">more</p><p className="vi2">{f.time}</p>
                                                </div>
                                                {f.replys.slice(0, 1).map(e => {
                                                    return (<div key={e.time} onClick={() => { this.backfilterin(f.id) }} className="reply-box">
                                                        {e.user.map(e => { return (<img key={e.image} src={e.image} alt='mirs' className='ui-lover-alita' />) })}
                                                        <div className="vir"><p>{`${e.reply.slice(0, 19)}${e.reply.length >= 19 ? '...' : ''}`}</p></div><p className="vir3">{e.time}</p>
                                                    </div>
                                                    )
                                                })}
                                            </div>
                                            )
                                        })}




                                        {typeof this.state.viewcomment[0] === 'object' && this.state.viewcomment.map(e => {
                                            return (<div key={e.id} style={{ height: 'max-content' }} className="i-come-box">
                                                {e.user.map(e => {
                                                    return (<div key={e.image} className="amazing-work">
                                                        <p className="amaz">{`${e.user_name.slice(0, 8)} ${e.user_lastname.slice(0, 8)}`}</p>
                                                        <img src={e.image} alt='mirs' className='ui-sendi-alita' />

                                                    </div>)
                                                })}
                                                <div style={{ height: 'max-content' }} className="afrikan">
                                                    <p>{e.comment}</p>
                                                </div>
                                                <div className="video-love">
                                                    <img onClick={() => { this.reate(e.id) }} src={`https://res.cloudinary.com/platformtour/image/upload/v1634259688/love_vswcq6.png`} alt='mirs' className='ui-love-alita' />
                                                    <p className="vi">{e.rate}</p><p onClick={this.backfilter} style={{ opacity: 1 }} className="vi3">BACK</p><p style={{ opacity: 0 }} className="vi3">more</p><p className="vi2">{e.time}</p>
                                                </div>
                                                {e.replys.map(e => {
                                                    return (<div key={e.time} style={{ height: 'max-content', alignItems: 'center', flexDirection: 'column' }} className="reply-box">
                                                        <div className="dives">
                                                            {e.user.map(e => { return (<img key={e.image} src={e.image} alt='mirs' className='ui-lover-alita' />) })}
                                                            {e.user.map(e => { return (<p key={e.user_name} style={{ marginLeft: '-44px', color: 'black', fontWeight: 'bold' }} className="vir3"> {`${e.user_name.slice(0, 8)} ${e.user_lastname.slice(0, 8)}`}</p>) })}
                                                            <p className="vir3">{e.time}</p>

                                                        </div>
                                                        <div className="vir"><p>{e.reply}</p></div>
                                                    </div>)
                                                })}
                                            </div>
                                            )
                                        })}







                                    </div>
                                </div>

                            </div>




                        </div>




                        <div style={{ background: this.state.woning === true ? 'linear-gradient(rgb(255, 0, 0),rgb(255, 0, 0))' : this.state.comment.length >= 1 ? ' linear-gradient(150deg,rgb(255, 255, 255),rgb(255, 255, 255),rgb(255, 255, 255))' : 'linear-gradient(150deg, rgb(255, 0, 255), rgb(250, 91, 255), rgb(255, 82, 226), rgb(255, 54, 211), rgb(252, 45, 200))' }} className="send-box-size">
                            <div className="inputsend">
                                <input value={this.state.comment} onChange={this.comment} placeholder={this.state.woning === true ? 'please login first' : this.state.c === false ? 'comment...' : `reply to...${this.state.replyto}`} className={this.state.woning === true ? 'search-placew' : 'search-place'} />
                            </div>
                            <div onClick={this.state.c === false ? this.onSubmit : this.reply} className="sendbottun-wrrap">
                                <img src={`https://res.cloudinary.com/platformtour/image/upload/v1634259785/send_sazcht.png`} alt='mors' className='ui-send' />
                            </div>
                        </div>


                    </div>}





                   




                    {this.state.routesch === true &&
                        < div style={{filter:this.state.size>620&&this.state.zindex&&'blur(11px)'}} className="navbar">

                            {
                                this.state.size >= 620 ?
                                    <div className="mobile-nav">
                                       <Link style={{ color: '#ffff', textDecoration: 'none'}} to='/'>          
                                    <div onClick={this.homepageinvbck} className="logo-nav-trail">
                                        <img src={Xlogo} alt='walls' className="walls-log-o" />
                                                <span className="this-week-str-o">TRAIL</span>
                                        </div>
                                        </Link>
                                        <div className="options">



                                            <Link style={{ color: '#ffff', textDecoration: 'none' ,marginLeft:'-8%' }} to='/'>
                                                <div onClick={this.homepageinvbck} className="option1"><span className="desktop">Home</span></div>
                                            </Link>
                                        <Link style={{ color: '#ffff', textDecoration: 'none',marginLeft:'3%' }} to='./popular_movies'>
                                            <div onClick={this.homepageinv} className="option1"><span className="desktop">Movies</span></div>
                                            </Link>
                                            <Link style={{ color: '#ffff', textDecoration: 'none',marginLeft:'3%' }} to='./shows'>
                                            <div onClick={this.homepageinv} className="option1"><span className="desktop">Shows</span></div>
                                            </Link>
                                           
                                            <div className="option1-more">
                                                <div className="option1-more-2">
                                                <div style={{fontSize:'10px',border:'1px solid white'}} onClick={this.mode} className="op-more">
                                                    <span>{this.state.mode === false ? 'Dark UI' : 'Light UI'}</span>
                                                </div>
                                               


                                                </div>
                                            </div>
                                        </div>
                                        <div className="more-options">
                                            <div className="search-and-more">
                                                <div onClick={this.comments} className="search-wrap">
                                                    <input value={this.state.seachi} onChange={this.handleSeach} placeholder='search...' className='search-input' />
                                                </div>
                                                <div onClick={this.switch} className="more-box">
                                                    {this.state.image.length > 1 ? <img src={this.state.image} alt='mors' className='user-icon' /> : <User className='user-icon' />}
                                                </div>


                                            </div>

                                            <div onClick={this.settings} className="sign-settings">
                                                <div className="blocks"></div>
                                                <div className="blocks"></div>
                                                <div className="blocks"></div>

                                            </div>

                                        </div>
                                    </div> :
                                    <div className="mobile-navr">

                                        <div className="mobile-nav-wrap">

             
                                            <div style={{ transform: this.state.r === true ? 'rotate(90deg)' : 'rotate(0deg)' }} onClick={this.sidebar} className="menu-bar">
                                                <div className="m-mobile-line"></div>
                                                <div className="m-mobile-line"></div>
                                                <div className="m-mobile-line"></div>

                                        </div>
                                        <Link style={{ textDecoration: 'none' }} to='/search'>
                           
                                            <img src={'./uploads/search.png'} alt='mors' className='seach-mobile' />
                                       </Link>
                                        </div>
                                    </div>
                  
                   
                   
                            }
                        </div>}


                    {this.state.size <= 620 &&this.state.sidebar===true&&
                         <div  style={{height:`${window.innerHeight}px`}} className="mobile-sidebar">
                         <div  style={{ width:`${window.innerWidth-80}px` ,backgroundColor: this.state.mode === false ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}  className="coner-bar">
                            <div className="logo-bar">
                            {this.state.image.length > 1 ? <img src={this.state.image} alt='mors' className='user-iconn' /> : <User className='user-icon-lo' />}
                            </div>
                            <Link style={{ textDecoration: 'none' }} onClick={this.sidebar} to='/'>
                            <div style={{ color: this.state.mode === false ? 'rgba(0, 0, 0, 0.555)' : 'rgb(247, 0, 255)' }} className="logo-bar1">HOME</div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} onClick={this.sidebar} to='./popular_movies'>
                            <div style={{ color: this.state.mode === false ? 'rgba(0, 0, 0, 0.555)' : 'rgb(247, 0, 255)' }}  className="logo-bar1">MOVIES</div>
                            </Link>
                               
                            <Link style={{ textDecoration: 'none' }} onClick={this.mode} >
                                <div onClick={this.sidebar} style={{ color: this.state.mode === false ? 'rgba(0, 0, 0, 0.555)' : 'rgb(247, 0, 255)' }} className="logo-bar1">{this.state.mode===false?'Dark UI':'Light UI'}</div>
                                </Link>
                          
                            {this.state.image.length > 2 ?
                              <div className="logo-bar1-log">
                              <div  onClick={this.outmobil}   className="logo-logibt">logout</div>
                          </div>: <Link style={{ textDecoration: 'none' }} onClick={this.sidebar} to='/form'>
                                <div className="logo-bar1-log">
                                    <div  className="logo-logibt">signup</div>
                                </div>
                            </Link>}
                            
                        </div>
                        <div style={{width:'80px'}} onClick={this.sidebar} className="ext-bar"></div>
                    </div>}

                    {this.state.size >= 620 && this.state.homeinv === true && this.state.vewsv === true &&
                        <div style={{filter:this.state.zindex&&'blur(11px)',}}  className="recent-viewsx">
                        <div  className="recent-w">RECENT</div>
                        <div className="viewv-map">
                            
                            {this.state.vewss && this.state.vewss.slice(0, 11).map((e,i)=> { return (<Link key={i} style={{ marginLeft: '1%'}} onClick={()=>{this.homepageinv(e.name)}} to={`./${e.name}`} ><img key={i} src={e.icon} alt='viw' className="viwz" /></Link>) })}
                        </div>
                  <div className='vlight'> </div>
                        </div>
                  
}
                   

                    {this.state.size >= 620 && this.state.playermode && <div onClick={this.player} style={{
                        filter:this.state.zindex&&'blur(11px)',
                        left:this.state.url==='./movie/:id/photo/:id'?`${this.state.size - 300}px`: this.state.full === true ? '0px' :this.state.hometop===true&&this.state.mini === false?`${this.state.size - 350}px` : this.state.mini === false ? '3%' :`${this.state.size - 300}px`,
                        top:this.state.url==='./movie/:id/photo/:id'?`${this.state.height - 210}px`: this.state.full === true ? '0px' :this.state.hometop===true&&this.state.mini === false?'73px' : this.state.mini === false ? '52px' : `${this.state.height - 210}px`,

                        height:this.state.url==='./movie/:id/photo/:id'?'180px': this.state.full === true ? '100%' : this.state.mini === true ? '180px' :this.state.hometop===true?'200px' : this.state.size <= 1200 && this.state.size > 900 ? '340px' : this.state.size <= 900 ? '280px': '450px',
                        width:this.state.url==='./movie/:id/photo/:id'?'240px': this.state.full === true ? '100%' : this.state.mini === true ? '240px' :this.state.hometop===true?'328px' : this.state.size <= 1200 && this.state.size > 900 ? '500px' : this.state.size <= 900 ? '450px' : '700px'

                    }} className="video-detail-wrap-play">
                        <video autoPlay onTimeUpdate={this.duration} style={{ height:this.state.url==='./movie/:id/photo/:id'?'180px': this.state.full === true ? '100%' : this.state.mini === true ? '180px' : this.state.hometop === true ? '200px' : this.state.size <= 1200 && this.state.size > 900 ? '340px' : this.state.size <= 900 ? '280px' : '450px', width:this.state.url==='./movie/:id/photo/:id'?'240px': this.state.full === true ? '100%' : this.state.mini === true ? '240px' : this.state.hometop === true ? '328px' : this.state.size <= 1200 && this.state.size > 900 ? '500px' : this.state.size <= 900 ? '450px' : '700px' }}
                            src={`http://localhost:8080/xtrail/videostream/${this.state.selectvideo}`} className='video-thembnail-play' />
                       
                      {this.state.opens===true&&(this.state.url==='./movie/:id/photo/:id'?false:true)&& this.state.mini === false?<div style={{display:'flex',backgroundColor: 'rgba(17, 17, 17, 0.328)'}} className="pixel">
                            <div className='playnext1'>
                            <div className='playnextn1'></div>
                                <div className='playnextn2'>
                                    <div className='playnextn1c1'></div>
                                    <div className='playnextn1c2'>
                                        <div
                                            style={{
                                                borderRight: this.state.mt1===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                                borderBottom: this.state.mt2===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                                borderLeft: this.state.mt3===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                                borderTop: this.state.mt4===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                       
                                            }}
                                            
                                            
                                            className='playnextx2'>
                                            {this.state.found.map(e => { return (<img key={e._id} src={e.icon} alt='mors' className='icon-playnext1' />) })}
                                        <img onClick={this.play} src={`https://res.cloudinary.com/platformtour/image/upload/v1633931707/play_bzvanb.png`} alt='mors' className='icon-playnext2' />
                                         
                                    </div>

                                    </div>
                                    <div className='playnextn1c3'>
                                    <div onClick={this.cancel} className='playnextcl'>cancel</div>
                                    
                                    </div>
                            </div>
                            <div className='playnextn3'></div>
                            </div>
                            <div className='playnext2'>
                                {this.state.found.map(e => { return (<img key={e._id} src={e.icon} alt='mors' className='icon-playnextk' />) })}
                                        {this.state.fount.map(e => { return ( <img  key={e._id} src={e.icon} alt='mors' className='icon-playnextk' />) })}
                                       
                            </div>
                            
                        </div>
:
                        <div onMouseMove={this.mousemove} className="pixel">

                            <div className="other-wrap"></div>
                            <div className="other-wrap2">
                                {this.state.duration === '00:00' && <div className="play-check"></div>}

                            </div>
                            <div className="other-wrap3">
                                <div className="duration-box">
                                    <div ref='size' className="bar-gray">
                                        <div style={{ width: `${this.state.player}%` }} className="progresbar">
                                            <div className="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                {(this.state.opacity === false ||(this.state.url==='./movie/:id/photo/:id'?true:false))&& <div className="duration-box2">
                                    <div className="play-images">
                                        <img onClick={this.play} src={this.state.play === false ? './uploads/pause.png' : './uploads/player_play.png'} alt='mors' className='drop-icon-play' />
                                        <img onClick={this.prev} src={'./uploads/prev.png'} alt='mors' className='drop-icon-play' />
                                        <img onClick={this.next} src={'./uploads/next.png'} alt='mors' className='drop-icon-play' />

                                    </div>
                                    <div className="sreen-box">
                                        {this.state.full === false&&(this.state.url==='./movie/:id/photo/:id'?false:true) && <img onClick={this.mini} src={'./uploads/crop.png'} alt='mors' className='drop-icon-play-box' />}
                                        <img onClick={this.close} src={'./uploads/close.png'} alt='mors' className='drop-icon-play-box' />
                                        {this.state.mini === false&&(this.state.url ==='./movie/:id/photo/:id'?false:true) && <img onClick={this.full} src={'./uploads/screen16.png'} alt='mors' className='drop-icon-play-box' />}


                                    </div>

                                    <div className="timer-box">
                                        {this.state.mini === false&&(this.state.url==='./movie/:id/photo/:id'?false:true)&& <p style={{fontSize:this.state.hometop===true&&'10px'}}>{this.state.duration}</p>}
                                    </div>

                                </div>}
                            </div>
                        </div>}

                    </div>}







                    {this.state.size<=620&&this.state.playermode && <div onClick={this.player} style={{
                        left: this.state.full === true ? '0px' : this.state.mini === false ? '0px' : `${this.state.size - 100}px`,
                        top: this.state.full === true ? '0px' : this.state.mini === false ? '49px' : `${this.state.height - 70}px`,
                        height: this.state.mini === true ?'60px' : this.state.size <= 600&& this.state.size>450?'350px':this.state.size<260?'140px':'200px',
                        width:  this.state.mini === true ?'90px':this.state.full === true ? '100%' : this.state.mini === true ? '240px' :'100%'

                    }} className="video-detail-wrap-play">
                        <video onTimeUpdate={this.duration} autoPlay style={{ height: this.state.mini === true ? '60px' : this.state.size <= 600 && this.state.size > 450 ? '350px' : this.state.size < 260 ? '140px' : '200px', width: this.state.mini === true ? '90px' : '100%' }}
                            src={`http://localhost:8080/xtrail/videostream/${this.state.selectvideo}`} className='video-thembnail-play' />
                        
                        
                        
                        
                   {this.state.opens===true&&this.state.mini === false?   
                   
                   <div style={{display:'flex',backgroundColor: 'rgba(17, 17, 17, 0.328)'}} className="pixel">
                            <div className='playnext1'>
                            <div className='playnextn1'></div>
                                <div className='playnextn2'>
                                    <div className='playnextn1c1'></div>
                                    <div className='playnextn1c2'>
                                        <div
                                            style={{
                                                borderRight: this.state.mt1===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                                borderBottom: this.state.mt2===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                                borderLeft: this.state.mt3===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                                borderTop: this.state.mt4===true?  '5px solid rgb(255, 0, 255)':' 5px solid rgba(255, 0, 255, 0)',
                                       
                                            }}
                                            
                                            
                                            className='playnextx2'>
                                            {this.state.found.map(e => { return (<img key={e._id} src={e.icon} alt='mors' className='icon-playnext1' />) })}
                                        <img onClick={this.play} src={`https://res.cloudinary.com/platformtour/image/upload/v1633931707/play_bzvanb.png`} alt='mors' className='icon-playnext2' />
                                         
                                    </div>

                                    </div>
                                    <div className='playnextn1c3'>
                                    <div onClick={this.cancel} className='playnextcl'>cancel</div>
                                    
                                    </div>
                            </div>
                            <div className='playnextn3'></div>
                            </div>
                            <div className='playnext2'>
                                {this.state.found.map(e => { return (<img key={e._id} src={e.icon} alt='mors' className='icon-playnextk' />) })}
                                        {this.state.fount.map(e => { return ( <img  key={e._id} src={e.icon} alt='mors' className='icon-playnextk' />) })}
                                       
                            </div>
                            
                        </div>
                   
                   
                   
                   
                   : <div onClick={this.state.mini === true ? this.mini : undefined} onMouseMove={this.mousemove} className="pixel">

                            <div className="other-wrap"></div>
                            <div className="other-wrap2">
                                {this.state.duration === '00:00' && <div className="play-check"></div>}

                            </div>
                            <div className="other-wrap3">
                                <div className="duration-box">
                                    <div ref='size' className="bar-gray">
                                        <div style={{ width: `${this.state.player}%` }} className="progresbar">
                                            <div className="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                {this.state.opacity === false && <div className="duration-box2">
                                    <div className="play-images">
                                        <img onClick={this.play} src={this.state.play === false ? './uploads/pause.png' : './uploads/player_play.png'} alt='mors' className='drop-icon-play' />
                                        <img onClick={this.prev} src={'./uploads/prev.png'} alt='mors' className='drop-icon-play' />
                                        <img onClick={this.next} src={'./uploads/next.png'} alt='mors' className='drop-icon-play' />

                                    </div>
                                    <div className="sreen-box">
                                        {this.state.full === false && <img    onClick={this.mini} src={'./uploads/crop.png'} alt='mors' className='drop-icon-play-box' />}
                                        <img onClick={this.close} src={'./uploads/close.png'} alt='mors' className='drop-icon-play-box' />
                                      
                                    </div>

                                    <div className="timer-box">
                                        {this.state.mini === false && <p style={{fontSize:'9px'}}>{this.state.duration}</p>}
                                    </div>

                                </div>}
                            </div>
                        </div>}

                    </div>}

                    {this.state.size>620&&this.state.zindex&&<div style={{ height: `${window.innerHeight}px` }} className="z-indexphoto">
                        <div onClick={this.zindexx} className="index-exit">
                        <div onClick={this.zindexx} className="index-exitin">
                           
                            <div className=" exstic"> </div>
                            <div className=" exstic2"> </div>
                        </div>
                        </div>
                        <div className="index-body">
                            <div className="index-left">
                            <div  onClick={this.aboveleft}className="right-bizzr">

<img src={'./uploads/goleft.png'} alt='mulan' className='gotor' />

</div>
                        </div>
                        <div className="index-body-img">



                                <div onClick={this.fullpic} style={{
                                    zIndex:this.state.fullpic&&100,
                                    top: this.state.fullpic && '0px',
                                    borderRadius:this.state.fullpic && '0px',
                                    position:this.state.fullpic&&'fixed',
                                    width:this.state.fullpic&&`${window.innerWidth}px`,
                                    height: this.state.fullpic && `${window.innerHeight}px`,
                                    maxWidth:this.state.fullpic&&`${window.innerWidth}px`,
                                    maxHeight: this.state.fullpic && `${window.innerHeight}px`
                              
                                }} className="abovesect-wrap">
                        {this.state.selectedmv.photo.slice(this.state.above,this.state.above+1).map((e,i)=> {

                            return (
                                <img key={i} src={e} alt='mulan' className='abovesect' />

)
})}
</div>
                                
                        </div>
                            <div className="index-right">
                                
                            <div onClick={this.aboveright}className="right-bizzr2">

<img src={'./uploads/goright.png'} alt='mulan' className='gotor' />

</div>
                        </div>
                        </div>

                        
                    </div>}






                </div>
            </Router >);
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};


export default connect(mapStateToProps, { Mode, PlayerMode,Profile, Account, Comment,Selectedvideo,Actionmovie,Selected,Views,Home,Back,Photo,Name})(Anyplay);
