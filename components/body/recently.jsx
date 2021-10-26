import React, { Component } from 'react'
import './body.css'
import './genres.css'
import './mobile.css'
import '../../homepage.css'
import { connect } from 'react-redux'
import Selected from '../../selected'
import Name from '../../name'
import Home from '../../home'

class Recently extends Component {
    state = {
        mode: this.props.anyplay.mode,
        leftg: 3,
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        swipe: false,
        size: window.innerWidth,
        vewss: this.props.anyplay.vewss,
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
                vewss: nextProps.anyplay.vewss,

            })
        }
    }

    routing = (selected) => {
        const select = this.state.vewss.filter(mv => mv.name === selected);

        this.props.Selected(select)

        this.props.Name(selected)
        return this.props.history.push(`./${selected}`)
    }

    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })

        }

        window.addEventListener('resize', wide, false)


    }



    componentDidMount() {
        this.size()
        const h = false
        this.props.Home(h)
        setInterval(() => {
            this.setState({
                swipe: !this.state.swipe
            })
        }, 15000)

    }

    render() {
        const date = new Date();
        const year = date.getFullYear()
      
        return (
            <div className="genres-page">


                {this.state.size <= 620 ? <div className="body-homeV">

                    {this.state.swipe === true ? <div style={{
                        height: this.state.size <= 600 && this.state.size > 500 ? '300px' :
                            this.state.size <= 500 && this.state.size > 400 ? '220px' :
                                this.state.size <= 400 && this.state.size > 350 ? '180px' :
                                    this.state.size <= 350 && this.state.size > 300 ? '165px' :
                                        this.state.size <= 300 && this.state.size > 250 ? '130px' :
                                            this.state.size <= 250 && '120px'
                    }} className="mobile-landpage">

<div  style={{ backgroundColor:'rgba(0, 0, 0)', borderRadius: '10px' }}  className="xtrai">
                        <img  src={'./uploads/tr.png'} alt='h-light' className='xdemoml' />
                                            <div    className="demozml">DEMO</div>
                                            <div className="demozp2ml"> · by Nophora Nhapho ©{year}</div>
                                   
                                     </div>
                       
                    </div>
                        :

                        <div style={{
                            height: this.state.size <= 600 && this.state.size > 500 ? '300px' :
                                this.state.size <= 500 && this.state.size > 400 ? '220px' :
                                    this.state.size <= 400 && this.state.size > 350 ? '180px' :
                                        this.state.size <= 350 && this.state.size > 300 ? '165px' :
                                            this.state.size <= 300 && this.state.size > 250 ? '130px' :
                                                this.state.size <= 250 && '120px'
                        }} className="mobile-landpage">


                            <img style={{
                                height: this.state.size <= 600 && this.state.size > 500 ? '300px' :
                                    this.state.size <= 500 && this.state.size > 400 ? '220px' :
                                        this.state.size <= 400 && this.state.size > 350 ? '180px' :
                                            this.state.size <= 350 && this.state.size > 300 ? '165px' :
                                                this.state.size <= 300 && this.state.size > 250 ? '130px' :
                                                    this.state.size <= 250 && '120px', marginLeft: this.state.size <= 600 && this.state.size > 500 ? '30%' :
                                                        this.state.size <= 500 && this.state.size > 400 ? '28%' : this.state.size <= 400 && this.state.size > 300 ? '27.5%' : '25%'

                            }} src={'./uploads/gggg.jpg'} alt='h-light' className='mobile-h-light' />

                            <div className="mobile-h-text">


                                <div className="mobile-text-in">

                                    <h1 style={{ fontSize: this.state.size <= 600 && this.state.size > 480 ? '17px' : this.state.size <= 480 && this.state.size > 320 ? '9px' : '5px' }} className="h1-color">Highlight:mulani</h1>
                                    <h1 style={{ fontSize: this.state.size <= 600 && this.state.size > 480 ? '17px' : this.state.size <= 480 && this.state.size > 320 ? '9px' : '5px' }} className="h1-color">Trailer</h1>
                                    <p style={{ fontSize: this.state.size <= 600 && this.state.size > 480 ? '12px' : this.state.size <= 480 && this.state.size > 320 ? '9px' : '6px' }}>Royal Challenger Bangalore off a nervy Super-
                                        over win against Mumbai indians in Match 10 Dream IPL 2020
</p>
                                    <p style={{ fontSize: this.state.size <= 600 && this.state.size > 480 ? '12px' : this.state.size <= 480 && this.state.size > 320 ? '4px' : '5px' }}>Dream IPL 2020</p>
                                </div>
                                <div className="watchr">
                                    <img style={{ width: this.state.size <= 400 ? '14px' : '28px', height: this.state.size <= 400 ? '18px' : '30px' }} src={'./uploads/play.png'} alt='watch' className='play-watchr' />
                                    <p style={{ fontSize: this.state.size <= 600 && this.state.size > 480 ? '15px' : this.state.size <= 480 && this.state.size > 320 ? '9px' : '5px' }}>Watch Now</p>
                                </div>






                            </div>

                        </div>

                    }






                    <div className="mobl-opn-sc">

                        <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="eper">Recently Uploaded</div>
                        <div className="meper">
                            {this.state.vewss && this.state.vewss.length <= 8 ?
                                this.state.vewss.map(e => {

                                return (<div onClick={() => { this.routing(e.name) }} style={{ marginTop: '3%', width: '90px', height: '40px', border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="mobile-box-slide-action">


                                    <img src={e.icon} alt='mulan' className='card-mobile-action' />
                                    <div className="pg-action">
                                        <div style={{ textTransform: 'uppercase' }} className="mdiv">{e.name.slice(0, 11)}</div>
                                    </div>





                                </div>)
                            }):
                            
                            this.state.vewss &&   this.state.vewss.slice(this.state.vewss.length - 8, this.state.vewss.length).map(e => {

                                return (<div onClick={() => { this.routing(e.name) }} style={{ marginTop: '3%', width: '90px', height: '40px', border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="mobile-box-slide-action">


                                    <img src={e.icon} alt='mulan' className='card-mobile-action' />
                                    <div className="pg-action">
                                        <div style={{ textTransform: 'uppercase' }} className="mdiv">{e.name.slice(0, 11)}</div>
                                    </div>





                                </div>)
                            })
                            
                            
                            }
                        </div>

                    </div>
                    <div className="mobile-addson">Adds...</div>


                    <div className="mobile-slide">
                        <div className="mobile-info">
                            <div className="separete-mobile">
                                <h1 style={{ fontSize: this.state.size <= 305 ? '9px' : '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Suggestions</h1>
                                <div className="mobile-more-link">
                                    <p onClick={() => this.props.history.push('./popular_movies')} className="m-m">more</p>
                                </div>
                            </div>
                        </div>
                        <div className="real-mobile-s">

                            <div className="scrollx-mobile">

                                {this.state.items.slice(0, 17).map(e => {

                                    return (<div style={{ border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e.name} className="mobile-box-slide">



                                        <img src={e.pic} alt='mulan' className='card-icon' />
                                        <div className="pg">
                                            <div className="pg-div"><p>pg 13</p></div>
                                        </div>
                                        <div className="card-info">
                                            <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='minrz'>{e.name.slice(0, 11)}</p>
                                            <div className='info-mobile-text'>
                                                <div style={{ fontSize: '9.5px' }} className="mfree">free</div>
                                                <div style={{ fontSize: '9.5px' }} className="mcomplite">complite</div>
                                            </div>

                                        </div>





                                    </div>)
                                })}
                            </div>
                        </div>


                    </div>







                    <div className="mobile-addson">Adds...</div>


                </div>
                    : <div className="body-home">


                        {this.state.swipe === true ? <div style={{ height: this.state.size <= 900 ? '300px' : '400px' }} className="highlights">
                           
                        
                        <div className="xtrai">
                        <img src={'./uploads/tr.png'} alt='h-light' className='xdemo' />
                        <div className="demoz">DEMO</div>
                        <div className="demozp2"> · by Nophora Nhapho ©{year}</div>
                                   
                    </div>
                        
                        
                        </div> :

                            <div style={{ height: this.state.size <= 900 ? '300px' : '400px' }} className="highlightss">
                                <img style={{ height: this.state.size <= 900 ? '300px' : '400px' }} src={'./uploads/gggg.jpg'} alt='h-light' className='h-light' />
                                <div className="h-text">
                                    <div className="border-text">
                                        <h1 style={{ fontSize: this.state.size <= 900 ? '15px' : '20px' }} className="h1-color">Highlight:Watch More</h1>
                                        <h1 style={{ fontSize: this.state.size <= 900 ? '15px' : '20px' }} className="h1-color">Trailer</h1>
                                        <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Royal Challenger Bangalore off a nervy Super-
                                            over win against Mumbai indians in Match 10 Dream IPL 2020
        </p>
                                        <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Dream IPL 2020</p>
                                    </div>
                                    <div className="watch">
                                        <img src={'./uploads/play.png'} alt='watch' className='play-watch' />
                                        <p style={{ fontSize: this.state.size <= 900 ? '12px' : '15px' }}>Watch Now</p>
                                    </div>

                                </div>
                            </div>


                        }












                        <div style={{ fontSize: '9px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>Recently view</h1></div>

                        <div className="genres-page-wrap">
                            {this.state.vewss && this.state.vewss.length <= 8 ? this.state.vewss.map(e => {
                                return (<div onClick={() => { this.routing(e.name) }} style={{ border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="cards-genreg">
                                    <img src={e.icon} alt='mulan' className='card-icon-genre' />

                                    <div className="card-info-genre">
                                        <p style={{ textTransform: 'uppercase' }} className='in-genre'>{e.name.slice(0, 11)}</p>


                                    </div>
                                </div>)
                            }) : this.state.vewss && this.state.vewss.slice(this.state.vewss.length - 8, this.state.vewss.length).map(e => {
                                return (<div onClick={() => { this.routing(e.name) }} style={{ border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="cards-genreg">
                                    <img src={e.icon} alt='mulan' className='card-icon-genre' />

                                    <div className="card-info-genre">
                                        <p style={{ textTransform: 'uppercase' }} className='in-genre'>{e.name.slice(0, 11)}</p>


                                    </div>
                                </div>)
                            })}



                        </div>
                        <div className="adds"><h1>Adds...</h1></div>


                        <div className="genre-infinity-scrollv">

                            <div className="movie-type">
                                <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Suggestions</h1> <div className="more-link"><p className="m">more</p></div></div>
                                <div className="slide-overflow">


                                    <div className="movie-wrap">
                                        <div className="movie-wrap-2">

                                            {this.state.items.slice(0, 17).map(e => {
                                                return (<div style={{ left: `${this.state.leftg}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e.name} className="cards">
                                                    <img src={e.pic} alt='mulan' className='card-icon' />
                                                    <div className="pg">
                                                        <div className="pg-div"><p>pg 13</p></div>
                                                    </div>
                                                    <div className="card-info">
                                                        <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='in'>{e.name.slice(0, 11)}</p>
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
                                        <div onClick={this.leftg} className="left"><p className="slide-text">left</p></div>

                                        <div onClick={this.rightg} className="right"><p className="slide-text">right</p></div>
                                    </div>
                                </div>

                            </div>


                        </div>


                        <div className="adds"><h1>Adds...</h1></div>


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

export default connect(mapStateToProps, { Selected,Name,Home })(Recently);