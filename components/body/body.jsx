import React, { Component } from 'react'
import './body.css'
import './mobile.css'
import '../../homepage.css'

import { connect } from 'react-redux'
import Actionmovie from '../../actionmovies'
import Home from '../../home'
import Views from '../../vewss'
import Selected from '../../selected'
import Name from '../../name'

import Xlogo from '../../xlogo.png'
import Sponge from '../../sponge.jpg'
import Money from '../../money.jpg'
import Playbtn from '../../play.png'

class Body extends Component {
    state = {
        size: window.innerWidth,
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        left: 3,
        leftp: 3,
        leftr: 3,
        leftg: 3,
        swipe: false,

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
        mode: this.props.anyplay.mode,
        vewss: this.props.anyplay.vewss,
        movies: this.props.anyplay.movies,

       
     
    }
    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
            console.log('size', window.innerWidth)

        }

        window.addEventListener('resize', wide, false)


    }

    left = () => {
        this.setState({
            left: this.state.left >= 53 ? 3 : this.state.left + 20
        })

    }
    right = () => {
        this.setState({
            left: this.state.left <= -47 ? 3 : this.state.left - 20
        })

    }

    routing = (selected) => {
        const select = this.state.movies.filter(mv => mv.name === selected);
       
        const check = this.state.vewss.filter(mv => mv.name === selected);
       
        if (typeof check[0] !== 'object') {
            const v = [...this.state.vewss, ...select]
            this.props.Views(v)
        }
       

        const n=selected

        this.props.Name(n)

        return this.props.history.push(`./${selected}`)
    }

    leftp = () => {
        this.setState({
            leftp: this.state.leftp >= 53 ? 3 : this.state.leftp + 20
        })
    }
    rightp = () => {
        this.setState({
            leftp: this.state.leftp <= -47 ? 3 : this.state.leftp - 20
        })
    }

    leftr = () => {
        this.setState({
            leftr: this.state.leftr >= 53 ? 3 : this.state.leftr + 20
        })
    }
    rightr = () => {
        this.setState({
            leftr: this.state.leftr <= -47 ? 3 : this.state.leftr - 20
        })
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                mode: nextProps.anyplay.mode,
                movies: this.props.anyplay.movies,
                vewss:nextProps.anyplay.vewss,
               
              
            })
        }
       
    }
    componentDidMount() {
        const h=false
        this.props.Home(h)
        this.props.Actionmovie()
        this.size()
        setInterval(() => {
            this.setState({
                swipe: !this.state.swipe
            })
        }, 15000)

    }
    render() {

     const date = new Date();
    const hour = date.getHours();
      

       return (<div className="body-home">

            {this.state.size <= 620 ? <div className="body-homeV">


                

<div  style={{backgroundImage:`url(${hour>19?Money:Sponge})`,}}  className='netflixt'>
<div className="fadeblackmb"></div>
                   </div>
               <div className="filmxb-box">
               <div className="filmxb-box2">
               <img src={Xlogo} alt='walls' className="xfilm-logo" />
                                                <span className="film-string">FILM</span>
                                           
                   </div>
                   <div className="filmxb-box3">
                   <span className="string-info">{hour>19?'Money Heist':'The SpongeBob Movie: Sponge on the Run'}</span>
                   </div>
                   <div className="filmxb-box4">
                       <div className="fort-box">
                       <span className="film-more">More</span>
                   </div>
               </div>
               </div>

                




                <div className="mobile-slide">
                    <div className="mobile-info">
                        <div className="separete-mobile">
                         <h1 style={{  fontSize:this.state.size <= 305?'9px': '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Popular Movies</h1>
                             <div className="mobile-more-link">
                             <p onClick={() => this.props.history.push('./popular_movies')} className="m-m">more</p>
                             </div>
                        </div>
                    </div>
                    <div className="real-mobile-s">

                        <div className="scrollx-mobile">

                            {this.state.movies.slice(0, 17).map(e => {

                                return (<div onClick={()=>{this.routing(e.name)} }    style={{border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="mobile-box-slide">
                                
                                
                                
                                 <img src={e.icon} alt='mulan' className='card-icon' />
                                
                                                    <div className="card-info">
                                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='minrz'>{e.name.slice(0,8)}</p>
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



 <div className="mobile-slide">
                    <div className="mobile-info">
                        <div className="separete-mobile">
                         <h1 style={{  fontSize:this.state.size <= 305?'9px': '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Popular Shows</h1>
                             <div className="mobile-more-link">
                             <p onClick={() => this.props.history.push('./popular_movies')} className="m-m">more</p>
                             </div>
                        </div>
                    </div>
                    <div className="real-mobile-s">

                        <div className="scrollx-mobile">

                            {this.state.items.slice(0, 17).map(e => {

                                return (<div  style={{border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e.name} className="mobile-box-slide">
                                
                                
                                
                                 <img src={e.pic} alt='mulan' className='card-icon' />
                                                   
                                                    <div  className="card-info">
                                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='minrz'>{e.name.slice(0,8)}</p>
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

                            {this.state.movies.slice(18, 35).map(e => {

                                return (<div onClick={()=>{this.routing(e.name)}}  style={{border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="mobile-box-slide">
                                
                                
                                
                                 <img src={e.icon} alt='mulan' className='card-icon' />
                                                   
                                                    <div className="card-info">
                                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='minrz'>{e.name.slice(0,8)}</p>
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




 <div className="mobile-slide">
                    <div className="mobile-info">
                        <div className="separete-mobile">
                         <h1 style={{  fontSize:this.state.size <= 305?'9px': '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Genres</h1>
                             <div className="mobile-more-link">
                             <p onClick={() => this.props.history.push('./popular_movies')} className="m-m">more</p>
                             </div>
                        </div>
                    </div>
                    <div className="real-mobile-s">

                        <div className="scrollx-mobile">

                            {this.state.items.slice(0, 17).map(e => {

                                return (<div  style={{border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e.pic} className="mobile-box-slide-action">
                                
                                
                                
                                 <img src={e.pic} alt='mulan' className='card-mobile-action' />
                                                    <div className="pg-action">
                                                        <div style={{textTransform: 'uppercase'}}  className="mdiv">{e.name.slice(0,11)}</div>
                                                    </div>
                                                    
                                
                                
                                
                                
                                </div>)
                            })}
                        </div>
                    </div>


                </div>






            </div>

                : <div className="body-home">

                    {<div  style={{backgroundImage:`url(${hour>19?Money:Sponge})`,}}  className='netflixt-show'>
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
</div> 
                    


                  }







                    <div className="more-moveis">

                        <div className="movie-type">
                            <div className="both-more">
                            <h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Popular Movies</h1>
                             <div className="more-link">
                             <p onClick={() => this.props.history.push('./popular_movies')} className="m">more</p>
                             </div>
                             </div>
                            <div className="slide-overflow">


                                <div className="movie-wrap">
                                    <div className="movie-wrap-2">
                                        {this.state.movies.slice(0, 17).map(e => {

                                            return (

                                                <div onClick={()=>{this.routing(e.name)} } style={{ left: `${this.state.left}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="cards">
                                                    <img src={e.icon} alt='mulan' className='card-icon' />
                                                    <div className="pg">
                                                        <div className="pg-div"><p>pg 13</p></div>
                                                    </div>
                                                    <div style={{marginTop:'-10px',position: 'relative'}} className="card-info">
                                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='in'>{e.name.slice(0,11)}</p>
                                                        <div className='info-text'>
                                                            <div className="free">free</div>
                                                            <div className="complite">complite</div>
                                                        </div>

                                                    </div>
                                                </div>

                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="inwrap">
                                <div onClick={this.left} className="left"><img src={'./uploads/goleft.png'} alt='mulan' className='gotorc' />
</div>

                                    <div onClick={this.right} className="right"><img src={'./uploads/goright.png'} alt='mulan' className='gotorb' />
</div>
                                  
                                </div>
                            </div>

                        </div>


                        <div className="movie-type">
                            <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Popular Shows</h1> <div onClick={() => this.props.history.push('./popular_movies')} className="more-link"><p className="m">more</p></div></div>
                            <div className="slide-overflow">


                                <div className="movie-wrap">
                                    <div className="movie-wrap-2">
                                        {this.state.items.slice(0, 17).map(e => {
                                            return (<div  style={{ left: `${this.state.leftp}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e.name} className="cards">
                                                <img src={e.pic} alt='mulan' className='card-icon' />
                                                <div className="pg">
                                                    <div className="pg-div"><p>pg 13</p></div>
                                                </div>
                                                <div style={{marginTop:'-10px',position: 'relative'}} className="card-info">
                                                    <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='in'>{e.name.slice(0,11)}</p>
                                                    <div className='info-text'>
                                                        <div className="free">free</div>
                                                        <div className="complite">complite</div>
                                                    </div>

                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                <div className="inwrap">
                                   
                                <div onClick={this.leftp} className="left"><img src={'./uploads/goleft.png'} alt='mulan' className='gotorc' />
</div>

                                    <div onClick={this.rightp} className="right"><img src={'./uploads/goright.png'} alt='mulan' className='gotorb' />
</div>
                                   
                                </div>
                            </div>

                        </div>



                        <div className="movie-type">
                            <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Recently Uploaded</h1> <div onClick={() => this.props.history.push('./recently')} className="more-link"><p className="m">more</p></div></div>
                            <div className="slide-overflow">


                                <div className="movie-wrap">
                                    <div className="movie-wrap-2">
                                        {this.state.movies.slice(18, 35).map(e => {
                                            return (<div onClick={()=>{this.routing(e.name)}} style={{ left: `${this.state.leftr}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="cards">
                                                <img src={e.icon} alt='mulan' className='card-icon' />
                                                <div className="pg">
                                                    <div className="pg-div"><p>pg 13</p></div>
                                                </div>
                                                <div style={{marginTop:'-10px',position: 'relative'}} className="card-info">
                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='in'>{e.name.slice(0.11)}</p>
                                                    <div className='info-text'>
                                                        <div className="free">free</div>
                                                        <div className="complite">complite</div>
                                                    </div>

                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                <div className="inwrap">
                                 
                                <div onClick={this.leftr} className="left"><img src={'./uploads/goleft.png'} alt='mulan' className='gotorc' />
</div>

                                    <div onClick={this.rightr} className="right"><img src={'./uploads/goright.png'} alt='mulan' className='gotorb' />
</div>
                                </div>
                            </div>

                        </div>

                        <div className="movie-type">
                            <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Genres</h1> <div onClick={() => this.props.history.push('./genres')} className="more-link"><p className="m">more</p></div></div>
                            <div className="slide-overflow">


                                <div className="movie-wrap">
                                    <div className="movie-wrap-2">
                                        {this.state.items.slice(0, 17).map(e => {
                                            return (<div style={{ left: `${this.state.leftg}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e.pic} className="cards-genre">
                                                <img src={e.pic} alt='mulan' className='card-icon-genre' />

                                                <div className="card-info-genre">
                                                    <p style={{textTransform: 'uppercase'}} className='in-genre'>{e.name.slice(0,11)}</p>


                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                                <div className="inwrap">
                                    <div onClick={this.leftg} className="left"><img src={'./uploads/goleft.png'} alt='mulan' className='gotorc' />
</div>

                                    <div onClick={this.rightg} className="right"><img src={'./uploads/goright.png'} alt='mulan' className='gotorb' />
</div>
                                </div>
                            </div>

                        </div>


                        <div className="contact">
                            <h1>CONTACT INFO...</h1>
                        </div>


                    </div>
                </div>}


        </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};
export default connect(mapStateToProps,{Actionmovie,Selected,Home,Views,Name})(Body);
