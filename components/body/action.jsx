import React, { Component } from 'react'
import './body.css'
import './genres.css'
import { connect } from 'react-redux'


class Action extends Component {
    state = {
        mode: this.props.anyplay.mode,
        card: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                mode: nextProps.anyplay.mode,
            })
        }
    }

    render() {
        return (
            <div className="genres-page">
                <div style={{ color: this.state.mode === true ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)' }} className="genre-header"><h1>Genres</h1></div>

                <div className="genres-page-wrap">
                    {this.state.card.slice(0, 9).map(e => {
                        return (<div style={{ left: `${this.state.leftg}%`, border: this.state.mode === true ? `0.3px solid rgba(255, 255, 255, 0.671)` : '' }} key={e} className="cards-genreg">
                            <img src={'./uploads/mulan.jpg'} alt='mulan' className='card-icon-genre' />

                            <div className="card-info-genre">
                                <p className='in-genre'>ACTION</p>


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

export default connect(mapStateToProps)(Action);