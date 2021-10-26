import React, { Component } from 'react'
import './body.css'
import './genres.css'
import './mobile.css'
import '../../homepage.css'

import Home from '../../home'
import Views from '../../vewss'
import Name from '../../name'


import { connect } from 'react-redux'
import InfiniteScroll from 'react-infinite-scroll-component';


import Like from './uploads/like.png'

class Genres extends Component {
    state = {
        leftg: 3,
        slice: 20,
        relise: '',
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 18, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 118, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200],
        movieadd: [...this.props.anyplay.movies, ...this.props.anyplay.movies, ...this.props.anyplay.movies, ...this.props.anyplay.movies],

        size: window.innerWidth,
        mode: this.props.anyplay.mode,
        vewss: this.props.anyplay.vewss,

    }
    size = () => {
        const wide = () => {
            this.setState({
                size: window.innerWidth
            })
        

        }

        window.addEventListener('resize', wide, false)


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
                movies: nextProps.anyplay.movies,
                movieadd: [...nextProps.anyplay.movies, ...nextProps.anyplay.movies, ...nextProps.anyplay.movies, ...nextProps.anyplay.movies],
                vewss: nextProps.anyplay.vewss,


            })
        }
    }
    componentDidMount() {
        this.size()
        const h = false
        this.props.Home(h)

    }


    routing = (selected) => {
        const select = this.state.movies.filter(mv => mv.name === selected);

        const check = this.state.vewss.filter(mv => mv.name === selected);

        if (typeof check[0] !== 'object') {
            const v = [...this.state.vewss, ...select]
            this.props.Views(v)
        }
        const n = selected

        this.props.Name(n)

        return this.props.history.push(`./${selected}`)
    }

    render() {
        return (
            <div className="genres-page">


                {this.state.size <= 620 ? <div className="genres-page-mz">

                    <div style={{ fontSize: '11px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1 style={{ fontSize: '11px' }}  >Popular Movies</h1></div>
                    <div className="genres-page-wrap-m">

                        {this.state.movieadd.slice(0, this.state.slice).map(e => {

                            return (<div onClick={() => { this.routing(e.name) }} style={{ marginTop: '3%', border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="mobile-box-slide">



                                <img src={e.icon} alt='mulan' className='card-icon' />
                               
                                <div className="card-info">
                                    <p style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className='minrz'>{e.name.slice(0,8)}</p>
                                    <div className='info-mobile-text'>
                                        <div style={{ fontSize: '9.5px' }} className="mfree">free</div>
                                        <div style={{ fontSize: '9.5px' }} className="mcomplite">complite</div>
                                    </div>

                                </div>





                            </div>)
                        })}




                    </div>

                    <div className="genre-infinity-scroll">
                        <InfiniteScroll
                            style={{ overflow: 'hidden' }}
                            dataLength={this.state.slice}//This is important field to render the next data
                            next={this.chandleScroll}
                            hasMore={this.state.card.length > this.state.slice}
                            loader={this.state.relise === false && <div className='load-infinity-2'></div>}>
                        </InfiniteScroll>



                    </div>


                    {this.state.card.length < this.state.slice && <div className="genre-infinity-scrollv-2">

                        <div className="mobile-slide">
                            <div className="mobile-info">
                                <div className="separete-mobile">
                                    <h1 style={{ fontSize: this.state.size <= 305 ? '9px' : '13px', color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Genres</h1>
                                    <div className="mobile-more-link">
                                        <p onClick={() => this.props.history.push('./popular_movies')} className="m-m">more</p>
                                    </div>
                                </div>
                            </div>
                            <div className="real-mobile-s">

                                <div className="scrollx-mobile">

                                    {this.state.card.slice(0, 17).map(e => {

                                        return (<div style={{ border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} className="mobile-box-slide-action">



                                            <img src={'./uploads/mulan.jpg'} alt='mulan' className='card-mobile-action' />
                                            <div className="pg-action">
                                                <div className="mdiv">ACTION</div>
                                            </div>





                                        </div>)
                                    })}
                                </div>
                            </div>


                        </div>


                    </div>}





                </div>
                    :

                    <div className="genres-page-m">
                        <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>Popular Movies</h1></div>

                        <div className="genres-page-wrap">

                            {this.state.movieadd.slice(0, this.state.slice).map(e => {
                                return (
                    
                                    <div onClick={() => { this.routing(e.name) }} key={e._id} style={{ border: this.state.mode === true ? `0.3px solid rgb(255, 255, 255)` : '' }} className="mobile-update">
                                        <img src={e.icon} alt='mulan' className="mobile-update1" />
                                        <div className="mobile-update2">

                                        </div>
                                        <div className="lap-info">
                                            <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="info-lap1">{e.name.slice(0, 11)}</span>
                                            <div className="info-lap2">
                                                <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="age-span1">{e.genre}</span>
                                                <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="age-span2">{`${e.duration.hour}h ${e.duration.min}min`}</span>
                                                <div style={{ border: this.state.mode === true ? `0.3px solid rgb(255, 255, 255)` : '' }} className="age-pg"><span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="age-span">13 PG</span></div>
 
                                            </div>
                                            <div style={{ justifyContent: 'space-between' }} className="info-lap2">
                                                <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="info-views">Views 1k</span>
                                                <div className="like-div">
                                                    <img src={Like} style={{ filter: this.state.mode === true ? 'invert(0%)' : 'invert(100%)' }} alt='like' className="like-btn-img" />
                                                    <span style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="info-views">{`${e.rate.length}${e.rate.length >= 1000000 ? 'M' : e.rate.length >= 1000 ? 'k' : ''}`}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                            })}
                


                        </div>

                        <div className="genre-infinity-scroll">
                            <InfiniteScroll
                                style={{ overflow: 'hidden' }}
                                dataLength={this.state.slice}//This is important field to render the next data
                                next={this.chandleScroll}
                                hasMore={this.state.card.length > this.state.slice}
                                loader={this.state.relise === false && <div className='load-infinity'></div>}>
                            </InfiniteScroll>



                        </div>


                        {this.state.card.length < this.state.slice && <div className="genre-infinity-scrollv">

                            <div className="movie-type">
                                <div className="both-more"><h1 style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="h1-more" >Genres</h1> <div className="more-link"><p className="m">more</p></div></div>
                                <div className="slide-overflow">


                                    <div className="movie-wrap">
                                        <div className="movie-wrap-2">
                                            {this.state.movieadd.slice(0, 17).map(e => {
                                                return (<div onClick={() => { this.routing(e.name) }} style={{ left: `${this.state.leftg}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e._id} className="cards-genre">
                                                    <img src={e.icon} alt='mulan' className='card-icon-genre' />

                                                    <div className="card-info-genre">
                                                        <p style={{ textTransform: 'uppercase' }} className='in-genre'>{e.name.slice(0, 11)}</p>


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


                        </div>}

                       



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

export default connect(mapStateToProps, { Home, Views, Name })(Genres);
