import React, { Component } from 'react'
import './body.css'
import './genres.css'
import './movie.css'
import '../../homepage.css'
import { ReactComponent as Play } from './assets/play-button.svg'

import { connect } from 'react-redux'
import Player from '../../play'
import Comment from '../../comment'
import Selectedvideo from '../../actionvideo'
import Selected from '../../selected'
import Actionmovie from '../../actionmovies'
import Home from '../../home'
import Views from '../../vewss'
import Photo from '../../photos'
import Photourl from '../../photourl'
import Back from '../../back'
import Name from '../../name'
import Pnumber from '../../pnumber'

import Replace from './uploads/angry.png'



class Movie extends Component {
    state = {
        fullpic:false,
        mode: this.props.anyplay.mode,
        player: this.props.anyplay.play,
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,18,19,20,21,22,23,24,25,26,27,28,29,30],
        leftg: 3,
        size: window.innerWidth,
        ratem: 86,
        account: this.props.anyplay.account,

        viewcomment: [],
        
        inpostion:0,
        answer:false,
        commentr: [ ],


        name:this.props.anyplay.name,
        pnumber:this.props.anyplay.pnumber,
     

        slidep: false,
       p:this.props.anyplay.photourl,

        rati: [],
        ratifk: [],
        movei: false,
        comment: '',
        c: false,
        replay: [],
        creply: [],
        replayfk: [],
        comz: [],
        rate: 2,
        message: false,
        replyto: ``,

        woning: false,
        vewss: this.props.anyplay.vewss,
        movies: this.props.anyplay.movies,
        selected: this.props.anyplay.selected,
        back: this.props.anyplay.back,
        selectedmv: {
            name: 'name',
            icon: 'iconxx',
            thumbnail: 'thumbnailx',
            duration: 'duration',
            rate: 'rate',
            genre:'',
            info: 'info',
            photo: [1,2,3,4,5],
        },
        items: [
            { name: 'no time to die', pic: './uploads/x1.jpg' },
            { name: 'award', pic: './uploads/x2.jpg' },
            { name: 'angry birds', pic: './uploads/angry.png' },
            { name: 'everything', pic: './uploads/everything.jpg' },
            { name: 'incredible', pic: './uploads/incer.jpg' },
            { name: 'jumanji', pic: './uploads/juma.jpg' },
            { name: 'penensula', pic: './uploads/x3.jpg' },
            { name: 'i still believe', pic: './uploads/belive.jpg' },
            { name: 'mr bean', pic: './uploads/mrbin.jpg' },
            { name: 'rabbit 2', pic: './uploads/x4.jpg' },
            { name: 'kiss', pic: './uploads/kiss.jpg' },
            { name: 'sonic', pic: './uploads/sonic.jpg' },
            { name: 'rambo', pic: './uploads/x5.jpg' },
            { name: 'tom and jery', pic: './uploads/tom.jpg' },
            { name: 'spongebob', pic: './uploads/spong.jpg' },
            { name: 'raya', pic: './uploads/x6.jpg' },
            { name: 'spensor', pic: './uploads/x11.jpg' },
           
        ],

    }



    commentx = () => {
        const coment = true
        this.props.Comment(coment)
    }

    fullpic = () => {
        this.setState({fullpic:!this.state.fullpic})
    }

    leftg = () => {
        this.setState({
            leftg: this.state.leftg >= 53 ? 3 : this.state.leftg + 20
        })
    }
    rightg = () => {
        this.setState({
            leftg: this.state.leftg <= -47 ? 3 : this.state.leftg - 20
        })
    }




    routing = (selected) => {

const dex=this.state.selectedmv.photo.findIndex(e=> e === selected)
 
this.setState({ above: dex,
    slidep: true,
    p :[{photo:this.state.selectedmv.photo}]
       
})



        const p =[{photo:this.state.selectedmv.photo}]
        
    const  url=this.state.slidep===false?'./movie/:id/photo/:id':'./movie/:id'
        this.props.Photo(url)
        this.props.Photourl(p)

const n=this.state.selectedmv.name

this.props.Name(n)
this.props.Pnumber(dex)

        return this.props.history.replace(`./xtrail photo ${dex}`)

}

    urlback = () => {
        
        const url = this.state.slidep === true ? './movie/:id' : './movie/:id/photo/:id'
        this.props.Photo(url)

        setTimeout(() => {
            this.setState({
                slidep: false,
               })
    },1000)

          return this.props.history.replace(`./${this.state.selectedmv.name}`)
         
      
        
    }

aboveleft = () => {
   

    for (let key in this.state.p) {
        const { photo } = this.state.p[key]
        this.setState({
            above: this.state.above >= photo.length ? 0 : this.state.above + 1
        })
       const indexs=this.state.above >= photo.length ? 0 : this.state.above + 1
       

         return this.props.history.replace(`./xtrail photo ${indexs}`)

    }
}

aboveright = () => {


    for (let key in this.state.p) {
        const { photo } = this.state.p[key]

        this.setState({
            above: this.state.above <= 0 ? photo.length : this.state.above - 1
        })
        const indexs=this.state.above <= 0 ? photo.length : this.state.above - 1
       
         return this.props.history.replace(`./xtrail photo ${indexs}`)

   
    }
}


    hometop = (selected) => {

        this.props.Actionmovie()

        
       

        const select = this.state.movies.filter(mv => mv._id === selected);
        const recent = [...this.state.recents, ...select];

        this.setState({
            recents: this.state.recents.length <= 11 ? recent : this.state.recents,
           
            selected: select,
            selectedmv: { ...this.state.selectedmv, photo: [] }
        })

        this.props.Selected(select)


        for (let key in select) {
            const {video,genre, name,icon,thumbnail, duration,rate, info, photo}=select[key]
            this.props.Selectedvideo(video)

            this.setState({
               
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

const v=[...this.state.vewss,...select]
            this.props.Views(v)
            
        },4000)

      
       
}




    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                account:nextProps.anyplay.account,
                mode: nextProps.anyplay.mode,
                player: nextProps.anyplay.play,
                movies: nextProps.anyplay.movies,
                selected: nextProps.anyplay.selected,
                vewss:nextProps.anyplay.vewss,
                back:nextProps.anyplay.back,
                p:nextProps.anyplay.photourl,
        
        
            })
        }

        if (nextProps.anyplay.name) {
            this.setState({
                name: nextProps.anyplay.name
            })


     
        

        }
            if (nextProps.anyplay.pnumber) {

                this.setState({
                    pnumber: nextProps.anyplay.pnumber
                })
            }

        if (nextProps.anyplay.selected) {





            const selecting = nextProps.anyplay.selected
            for (let key in selecting) { 
              const { icon,genre, thumbnail,name,duration,rate,info,photo}=selecting[key]
             
               
      
              this.setState({
                  
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
              })
            }
            
        }
    }

    player = () => {
        const play = true
        this.props.Player(play)
    }

    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
        }

        window.addEventListener('resize', wide, false)


    }

    ratem = () => {
        this.setState({
            ratem: this.state.ratem === 100 ? 100 : this.state.ratem + 1
        })
    }

    componentDidMount() {

        window.scrollTo({
            behavior: 'smooth',
            top: 0
        })
       
      
        if (this.props.match.url!== `/${this.state.name}`) {

            
        this.setState({ above: this.props.match.params.id * 1,
            slidep: true,
        })
    
          
                if (this.state.selected) {





                    const selecting = this.state.selected
                    for (let key in selecting) {
                        const {  icon,genre, thumbnail, name, duration, rate, info, photo } = selecting[key]
                        this.setState({
                         
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
                        })
                    }
            
                }
            

        } else {
            if (this.state.back === false) {


                    const select = this.state.movies.filter(e => { return e.name === this.props.match.params.id  })
      
       
    
        window.document.all[9].innerText=`Xtrail : ${this.props.match.params.id}`.toUpperCase()
       
                this.setState({
           
                    selected: select,
                    selectedmv: { ...this.state.selectedmv, photo: [] }
                })

                this.props.Selected(select)

                for (let key in select) {
                    const { video,genre, name, icon, thumbnail, duration, rate, info, photo } = select[key]
                    this.props.Selectedvideo(video)

                    this.setState({
                      
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
                
                
                
                    })
                }
            
            }
        }

        this.figerscroll()
        this.size()
        const h=false
        this.props.Home(h)
        this.props.Actionmovie()
        setInterval(() => {
            this.setState({
                swipe: !this.state.swipe
            })
        }, 15000)

    }


    onSubmit = event => {
        event.preventDefault();



        if (typeof this.state.account[0] === 'object') {

            const date = new Date();
            const hour = date.getHours();
            const min = date.getMinutes()

            const create_comment = [{
                id: Math.random(),
                date: Date.now(),
                user: !this.state.c && this.state.account,
                time: `${hour}:${min <= 9 ? '0' : ''}${min}`,
                comment: !this.state.c && this.state.comment,
                rate: 0,

                replys: [
                    {
                        id: Math.random(),
                        date: 1591104458239,
                        time: `${hour}:${min <= 9 ? '0' : ''}${min}`,
                        user: [{
                            image: "./uploads/alita.jpg",
                            user_name: 'nophora',
                            user_lastname: 'nhapho',
                            user_email: 'nhapho@gmail.com',
                            user_password:'12nhamosh',
                        }],
                        reply: `i guess am the first to comment, Take care`

                    }
                ],

            }];

            const { commentr,selected ,selected: [{ comments }] } = this.state;

            const sortmobl=[...commentr, ...create_comment]
          
            const done=[...sortmobl.sort((a,b)=>b.date - a.date)]

            for (let key in selected) {

                this.setState({
                    selected: [{ ...selected[key], comments: [...comments, ...create_comment] }],
                   
                    comment: '',
                    commentr:done
                })

            }


            setTimeout(() => {
                const gabt = document.querySelector('.mobx-scroll')

        gabt.scrollTo({
            behavior: 'smooth',
            top: 0
        })
            }, 1500)

            
/*
            //wating for MongoDb
            setTimeout(() => {
              
                for (let key in this.state.selected) {

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
            

            }, 90)

*/




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

//selected: [{ comments }]
            const { commentr } = this.state;
            const ratafk = commentr.filter(e => { return e.id === select });
            const notonefk = commentr.filter(n => { return n.id !== select });

       //    const rata = comments.filter(e => { return e.id === select });
        //    const notone = comments.filter(n => { return n.id !== select });

//OREALLY OPARATION
/*

setTimeout(() => {
    const { rati, rati: [{ rate }] } = this.state;
    for (let key in rati) {
            const rare = rata[key];
            this.setState({ rati: [{ ...rare, rate: rate + 1 }] })

    }
}, 100)

setTimeout(() => {
    for (let key in this.state.selected) {

            const newrate = [...notone, ...this.state.rati];
            const sort = [...newrate.sort((a, b) => a.date - b.date)]
            this.setState({
                selected: [{ ...this.state.selected[key], comments: sort }],

            })
        
    }

}, 105)

//wating for MongoDB request
setTimeout(() => {
    for (let key in this.state.selected) {

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

}, 110)

*/




//FAKE OPARATION
            this.setState({ ratifk: ratafk })
            setTimeout(() => {
                const { ratifk, ratifk: [{ rate }] } = this.state;
                for (let key in ratifk) {
                    const rare = ratafk[key];
                    this.setState({ ratifk: [{ ...rare, rate: rate >= 9 ? 9 : rate + 1 }] })

                }
            }, 100)

            setTimeout(() => {


                const newrate = [...notonefk, ...this.state.ratifk];

                const sort = [...newrate.sort((a, b) => b.date - a.date)]

                this.setState({
                    commentr: sort

                })

                if (typeof this.state.viewcomment[0] === 'object') {

                    this.setState({
                        viewcomment: this.state.ratifk

                    })
                }



            }, 105)


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
                const sorcom = [...comfus.sort((a, b) => b.date - a.date)];

                this.setState({
                    commentr: sorcom,
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



  




    figerscroll = () => {
        const handleScroll=()=> {
            const ypostion = window.scrollY;
            const answer = ypostion < this.state.inpostion;

            this.setState({
                answer,
                inpostion: ypostion
            });
           
        }

        window.addEventListener('scroll', handleScroll, false);
        return () => { window.removeEventListener('scroll', handleScroll, false); }

    }


    comment = event => {
        this.setState({ comment: event.target.value })
    }


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


    render() {
        return (
            <div  className="genres-page">
                {this.state.size <=620?<div className="genres-page-mz">
                    
               <div style={{ height: this.state.size <= 600&& this.state.size>450?'350px':this.state.size<260?'140px':'200px', width: this.state.size <= 600 && '100%' ,}} className="video-detail-wrap">
               {this.state.selected.map(e => { return ( <img style={{ height: this.state.size <= 600&& this.state.size>450?'350px':this.state.size<260?'140px':'200px', width:this.state.size <= 600 && '100%' }} key={e.thumbnail} src={Replace} alt='mulan' className='video-thembnail-m' />) })}
                        <div style={{  marginTop: this.state.size<=600&& this.state.size>450?'-350px':this.state.size<260?'-140px':'-200px', height: this.state.size <= 600 && this.state.size>450?'350px':this.state.size<260?'140px': '200px' }} className="video-info-faide-m">
                            <div className="icon-and-details-m">
                                <Play onClick={this.player} className='play-button' />

                            </div>
                            <div className="icon-and-details">
                                <div className="icon-pic">
                                {this.state.selected.map(e => { return (<img key={e.icon} src={Replace} alt='mulan' className='video-thembnail-icon' />) })}
                                </div>
                                <div className="detail-force">
                                    <div className="over-lap-detail">
                                        <h1 style={{ fontSize: this.state.size <= 260 ? "90%" : '200%',textTransform: 'uppercase',width: 'max-content' }} className="over-h">{this.state.selectedmv.name.slice(0,11)}</h1>
                                        <p style={{ fontSize: this.state.size <= 600 && this.state.size>450?'80%': "50%" }} className="over-psV">{`${this.state.selectedmv.duration.hour}hr ${this.state.selectedmv.duration.min}min`} </p>
                                        <p style={{ fontSize: this.state.size <=600 && this.state.size>450?'80%':"50%" }} className="over-ps">Year-2020</p>
                                        <div style={{marginLeft: this.state.size <=260?'2%':'0%'}} className="disney">
                                            <p style={{ fontSize: this.state.size <= 600 && this.state.size>450?'80%': "50%" }} className="over-ps">Disney</p>
                                            <div className="blockbr"></div>
                                            <p style={{ fontSize: this.state.size <= 600&& this.state.size>450?'80%' :"50%" }} className="over-prz">Action</p>
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
                            <p style={{marginLeft:'2%', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="wo">Rates</p>
                            <p className="wo2">{`${this.state.ratem}%`}</p>
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

<div className="mobile-slide">
                    <div className="mobile-info">
                        <div className="separete-mobile">
                         <h1 style={{  fontSize:this.state.size <= 305?'9px': '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Photos</h1>
                            
                        </div>
                    </div>
                    <div className="real-mobile-s">

                        <div className="scrollx-mobile">

                        {this.state.selectedmv.photo.map(p => {

return ( <div style={{border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} className="mobile-box-slidept">
                                
                                
                                
                                 <img src={p}  alt='mulan' className='card-iconpb' />
                                                   
                                
                                
                                
                                
                                </div>)
                            })}
                        </div>
                    </div>
                    </div>
                   


                    
                    <div className="mobile-chatroom">
                        <div className="size-chats">
                            <p style={{
                                color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' 
                                ,fontSize: this.state.size <= 900 && this.state.size > 728 && "70%"
                            }}>view comments</p>
                                <img src={'./uploads/chat.png'} alt='mulan' className='chat-png' />
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
                                                    <p className="vi">{f.rate}</p><p onClick={() => { this.c(f.id) }} className="vi32">reply</p><p onClick={() => { this.backfilterin(f.id) }} className="vi32">more</p><p className="vi2">{f.time}</p>
                                               
                                    
                                </div>
                                {f.replys.slice(0, 1).map(e => {
                                                    return ( <div key={e.time} onClick={() => { this.backfilterin(f.id) }} className="mobile-reply">
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
                        <div className="mobile-inside-chatmr">
                            
                            
</div>
                    </div>



                   


                  



<div className="mobile-addson">Adds...</div>
                    <div className="mob-sugn">
                        

                    <div className="mobile-slide">
                    <div className="mobile-info">
                        <div className="separete-mobile">
                         <h1 style={{  fontSize:this.state.size <= 305?'9px': '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Recently Uploaded</h1>
                             <div className="mobile-more-link">
                             <p onClick={() => this.props.history.push('./popular_movies')} className="m-m">more</p>
                             </div>
                        </div>
                    </div>
                    <div className="real-mobile-s">

                        <div className="scrollx-mobile">

                            {this.state.items.slice(0, 17).map(e => {

                                return (<div style={{border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} className="mobile-box-slide">
                                
                                
                                
                                 <img src={e.pic} alt='mulan' className='card-icon' />
                                                    <div className="pg">
                                                        <div className="pg-div"><p>pg 13</p></div>
                                                    </div>
                                                    <div className="card-info">
                                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='minrz'>{e.name.slice(0,11)}</p>
                                                        <div className='info-mobile-text'>
                                                            <div style={{fontSize:'9.5px'}} className="mfree">free</div>
                                                            <div style={{fontSize:'9.5px'}} className="mcomplite">complite</div>
                                                        </div>

                                                    </div>
                                
                                
                                
                                
                                
                                </div>)
                            })}
                        </div>
                    </div>


                </div>





</div>

                    {this.state.answer === false && this.state.inpostion > 100 && <div className="mobile-send-comet">

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
                :
               
                    <div style={{ filter: this.state.slidep && 'blur(11px)' }} className="genres-page-m">
                <div className="movie-wrap-details">

                    <div style={{ opacity: this.state.player === true ? 0 : 1, height: this.state.size <= 1200 && this.state.size > 900 ? '340px' : this.state.size <= 900 ? '280px' : '450px', width: this.state.size <= 1200 && this.state.size > 900 ? '500px' : this.state.size <= 900 ? '450px' : '700px' }} className="video-detail-wrap">
                                {this.state.selected.map(e => { return (<img key={e.thumbnail} style={{ height: this.state.size <= 1200 && this.state.size > 900 ? '340px' : this.state.size <= 900 ? '280px' : '450px', width: this.state.size <= 1200 && this.state.size > 900 ? '500px' : this.state.size <= 900 ? '450px' : '700px' }} src={e.thumbnail} alt='mulan' className='video-thembnail' />) })}
                        <div className="video-info-faide">
                            <div className="icon-and-details">
                                <Play onClick={this.player} className='play-button' />

                            </div>
                            <div className="icon-and-details">
                                <div className="icon-pic">
                                {this.state.selected.map(e => { return (< img key={e.icon} src={e.icon} alt='mulan' className='video-thembnail-icon' />) })}
                                </div>
                                <div className="detail-force">
                                    <div className="over-lap-detail">
                                        <h1 style={{ fontSize: this.state.size <= 1200 ? "150%" : '200%' ,textTransform: 'uppercase',width: 'max-content' }} className="over-h">{this.state.selectedmv.name.slice(0,11)}</h1>
                                        <p style={{ fontSize: this.state.size <= 1200 && "70%" }} className="over-p">{`${this.state.selectedmv.duration.hour}hr ${this.state.selectedmv.duration.min}min`}</p>
                                        <p style={{ fontSize: this.state.size <= 1200 && "70%" }} className="over-p">Year-2020</p>
                                        <div className="disney">
                                            <p style={{ fontSize: this.state.size <= 1200 && "70%" }} className="over-p">Xtrail</p>
                                            <div className="blockb"></div>
                                                    <p style={{ fontSize: this.state.size <= 1200 && "70%" }} className="over-pr">{this.state.selectedmv.genre}</p>
                                        </div>


                                    </div>

                                    <div className="picture-share">
                                        <div className="inshare-pc">

                                            <img onClick={this.ratem} src={`https://res.cloudinary.com/platformtour/image/upload/v1634259733/star_taakf4.png`} alt='mulan' className='inshare-png' />
                                            <img src={`https://res.cloudinary.com/platformtour/image/upload/v1634259765/tag_siepr7.png`} alt='mulan' className='inshare-png' />
                                            <img src={`https://res.cloudinary.com/platformtour/image/upload/v1634259714/share_qhnz3j.png`} alt='mulan' className='inshare-png' />
                                            <img src={`https://res.cloudinary.com/platformtour/image/upload/v1634259668/download_hlkk3i.png`} alt='mulan' className='inshare-png' />



                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>



                            
                    <div style={{ height: this.state.size <= 1200 && this.state.size > 900 ? '380px' : this.state.size <= 900 && this.state.size > 728 ? '300px' : '450px', width: this.state.size <= 1200 && this.state.size > 900 ? '300px' : this.state.size <= 900 && this.state.size > 728 ? '200px' : '400px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="detail-dom">
                        <div className="dom-wrap">
                           
                        <div style={{marginTop:this.state.size <730&&'20px'}} className="rot-photos">
                                <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)'}} className="rot-photosn">PHOTOS</span>
                                <div className="rot-photosp">
                               
                                <div className="rot-photos1">
                                          
                                          {this.state.selected&&this.state.selected.map(e => {  

                                              return (e.photo.slice(0, 1).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm1' />) }))
                                          })}
                                             {this.state.selected&&this.state.selected.map(e => {  

return (e.photo.slice(2, 3).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm2' />) }))
                                             })}
                                             {this.state.selected&&this.state.selected.map(e => {  

return (e.photo.slice(3, 4).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm3' />) }))
                                             })}
                                             {this.state.selected&&this.state.selected.map(e => {  

return (e.photo.slice(4, 5).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm4' />) }))
})}
                                       
                
                
                                    </div>
                                        <div className="rot-photos2">


                                        {this.state.selected&&this.state.selected.map(e => {  

return (e.photo.slice(5, 6).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm5' />) }))
})}
  {this.state.selected&&this.state.selected.map(e => {  

return (e.photo.slice(6, 7).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm6' />) }))
})}
  {this.state.selected&&this.state.selected.map(e => {  

return (e.photo.slice(7, 8).map(p => { return(<img key={p} src={p} alt='mulan' onClick={() => { this.routing(p) }} className='chat-pngxm7' />) }))
})}
                                      

                                      
                                      </div>
                                </div>
                                </div>
                           
                           
                           
                           
                          
                        </div>

                        <div style={{ fontSize: this.state.size <= 900 && this.state.size > 728 && "50%",marginTop:(this.state.size <900 &&this.state.size >730)? "20px":this.state.size <730&&'-20px' }} className="realy-info">
                            <p>   {this.state.selectedmv.info.slice(0,216)}</p>
                                </div>
                                


                               

                    </div>


                            
                </div>
                <div className="rate-views">
                            <div onClick={this.commentx} style={{ width:'80px' ,height:'20px'}} className="witch">
                                <span style={{ fontSize: this.state.size <= 1200 && this.state.size > 728 ? "70%" : '12px' }}>comments</span>
                            </div>
                            <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)', fontSize: this.state.size <= 900 && this.state.size > 728 && "70%" }}>{`views ${35}k`}</span>
                            <span style={{color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)', fontSize: this.state.size <= 900 && this.state.size > 728 && "70%" }}>{`Rate ${this.state.ratem}%`}</span>
                            </div>
                <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>To Watch</h1></div>

                <div className="genres-page-wrap">
                    {this.state.movies.slice(0, 9).map(e => {
                        return (<div style={{overflowY:'hidden', border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id}  className="cards-genreg">

                            <img style={{height:'max-content'}} src={e.icon} alt='mulan' className='card-icon-genre' />

                            <div className="card-info-genre">
                                <div className="eperso">
                    <p>{e.name}</p>
                                </div>
                                <div className="eperso2">
                                    <Play className='play-buttonep' />
                                </div>
                            </div>
                        </div>)
                    })}



                </div>

             
        
               

              



                </div>}





                {this.state.size>620&& this.state.slidep=== true&&<div style={{ height: `${window.innerHeight}px` }} className="z-indexphoto">
            <div className="index-exit">
                <div  onClick={this.urlback } className="index-exitinc">

                    <div className=" exstic"> </div>
                    <div className=" exstic2"> </div>
                </div>
            </div>
            <div className="index-body">
                <div className="index-left">
                    <div onClick={this.aboveright} className="right-bizzr">

                        <img src={`https://res.cloudinary.com/platformtour/image/upload/v1634259646/goleft_vnv1nh.png`} alt='mulan' className='gotor' />

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

                    {this.state.p && this.state.p.map(p => {
                        return (p.photo.slice(this.state.above, this.state.above + 1).map(e => {

                            return (<img   key={e} src={e} alt='mulan' className='abovesect' />)
                        })
                        )
                    })}

</div>
                </div>
                <div className="index-right">

                    <div onClick={this.aboveleft} className="right-bizzr2">

                        <img src={`https://res.cloudinary.com/platformtour/image/upload/v1634259621/goright_jx8iwz.png`} alt='mulan' className='gotor' />

                    </div>
                </div>
            </div>


        </div>}






            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};

export default connect(mapStateToProps, { Player, Comment,Selectedvideo,Actionmovie,Selected,Home,Views,Photo,Back,Photourl,Pnumber,Name})(Movie);
