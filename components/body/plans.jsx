import React, { Component } from 'react'
import './body.css'
import './genres.css'
import '../../homepage.css'
import Home from '../../home'
import { connect } from 'react-redux'


class Plan extends Component {
    state = {
        mode: this.props.anyplay.mode,
        leftg: 3,
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
        swipe: false,
        size: window.innerWidth,

    }






    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                mode: nextProps.anyplay.mode,
            })
        }
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


                {this.state.size >= 620&&this.state.swipe === true ? <div style={{ height: this.state.size <= 900 ? '300px' : '400px' }} className="highlights">

                    <div className="xtrai">
                        <img src={'./uploads/tr.png'} alt='h-light' className='xdemo' />
                        <div className="demoz">DEMO</div>
                        <div className="demozp2"> · by Nophora Nhapho ©{year}</div>
                                   
                    </div>


                </div> :this.state.size >= 620&&

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




                   {this.state.size <= 620&&this.state.swipe === true ? <div style={{
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
                        :this.state.size <= 620&&

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







                <div style={{ fontSize: '9px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>Plans</h1></div>
                {this.state.size>620&&<div className="premeplan">

                    <div className="premeplan1">
                        <div className="premeplanx1">
                            <div className="premeplanx14"></div>
                        </div>
                        <div className="premeplanx2">
                            <img src={'./uploads/prim.jpg'} alt='h-light' className='premn' />

                            <div className="premeplanx2p">
                                <div className="premepn">Ends soon 3 months of
                                Premium for free </div>
                                <div className="premepnd">Offer ends in 6 days. Dont
                                miss ad-free trail, offline streams and more.
                                cancel anytime</div>
                                <div className="premebtn"><div>GET 3 MONTHS FREE</div></div>
                            </div>
                        </div>
                    </div>








                    <div className="premeplan2">
                        <div className="typek2"><div>XTRAIL OFFERS</div></div>
                        <div className="movement3">+ problems become yours to create for the future generation</div>
                        <div className="movement4">+ problems become yours to create for the future generation</div>
                        <div className="movement5">+ problems become yours to create for the future generation</div>
                        <div className="alcohol">

                            <div className="themometor">SELL</div>
                            <div className="social">BUY</div>
                        </div>

                    </div>

                </div>}



                <div className="genres-page-wrap">

                    {this.state.card.slice(0, 6).map(e => {
                        return (<div style={{ left: `${this.state.leftg}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e} className="genre-cards">

                            <div className="titles">
                                <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }}>{`{Title}`}</p>
                            </div>
                            <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="titles-body">
                                <div className="mouth-hader">
                                    <h1>Rs 100 /Month</h1>
                                </div>
                                <div className="distription-bord">
                                    <p>Discription</p>
                                </div>
                                <div className="distription-bord-2">
                                    <p>Top list of contants available with the same permission</p>
                                </div>

                            </div>
                            <div className="buy-title">
                                <div className="bton-buy">BUY</div>
                            </div>


                        </div>)
                    })}


                </div>
                <div className="adds"><h1>Adds...</h1></div>


            </div>

        )
    }

}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};

export default connect(mapStateToProps, { Home })(Plan);