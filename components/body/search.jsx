import React, { Component } from "react";
import "./search.css";
import Nav from "../../nav";
import Views from '../../vewss'
import Name from '../../name'


import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Search extends Component {
  state = {
  
    info: [{ info: "mulan" }],
    search: "",
    denav: false,
    mode: this.props.anyplay.mode,
    vewss: this.props.anyplay.vewss,
    movies: this.props.anyplay.movies,

  };

  search = (event) => {
    this.setState({ search: event.target.value });
  };

  info = () => {
    const add = [{ info: this.state.search }];
    this.setState({
      info: [...add, ...this.state.info],
    });
  };

  componentDidMount() {
    setTimeout(() => {
      const nv = false;

      this.props.Nav(nv);
    }, 100);
  }

  navs = () => {
    this.setState({
      denav: true,
    });

    setTimeout(() => {
      const nv = true;

      this.props.Nav(nv);
    }, 100);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.anyplay) {
      this.setState({
        mode: nextProps.anyplay.mode,
        movies: this.props.anyplay.movies,
        vewss:nextProps.anyplay.vewss,
     
      });
    }
  }

  routing = (selected) => {
    const select = this.state.movies.filter(mv => mv.name === selected);
   
    const check = this.state.vewss.filter(mv => mv.name === selected);
   
    if (typeof check[0] !== 'object') {
        const v = [...this.state.vewss, ...select]
        this.props.Views(v)
    }
   
    setTimeout(() => {
      const nv = true;

      this.props.Nav(nv);
    }, 100);


    const n=selected

    this.props.Name(n)

    return this.props.history.push(`./${selected}`)
}


  render() {
    const search = this.state.movies.filter((f) => {
      return f.name.toLowerCase().indexOf(this.state.search) !== -1;
    });

    if (this.state.denav === true) {
      return <Redirect to="/" />;
    }

    return (
      <div style={{ height: `${window.innerHeight}` }} className="seacg">
        <div className="fake-seach">
          <div className="mob-inputseac-box">
            <input
              value={this.state.search}
              onChange={this.search}
              placeholder="search..."
              className="mv-seachg"
            />
          </div>
          <div className="mb-seachboxx">
            <img
              onClick={this.info}
              src={"./uploads/search.png"}
              alt="seach"
              className="seac-mb"
            />
          </div>
        </div>
        <div className="boy-seach">
          {this.state.info
            .slice(
              this.state.info.length > 8 ? this.state.info.length - 5 : 0,
              this.state.info.length
            )
            .map((e) => {
              return (
                <div key={e.info} className="reacent">
                  <p className="rea">{e.info.slice(0, 27)}</p>
                  <img src={"./uploads/p6.png"} alt="seach" className="pg6" />
                </div>
              );
            })}

          {this.state.search.length > 0 && typeof search[0] !== "object" ? (
            <div
              style={{
                color:
                  this.state.mode === true
                    ? "rgb(255, 255, 255)"
                    : "rgb(0, 0, 0)",
              }}
              className="notfound"
            >
              movie not found
            </div>
          ) : (
            this.state.search.length > 0 &&
            search.map((e) => {
              return (
                <div key={e._id} onClick={()=>{this.routing(e.name)} } className="items-seach">
                  <img src={e.icon} alt="seach" className="mul-se" />
                  <div className="div-of-p">
                    <div
                      style={{
                        color:
                          this.state.mode === true
                            ? "rgb(255, 255, 255)"
                            : "rgb(0, 0, 0)",
                      }}
                      className="reaxx"
                    >
                      {e.name.slice(0, 27)}
                    </div>
                    <div
                      style={{
                        color:
                          this.state.mode === true
                            ? "rgb(255, 255, 255)"
                            : "rgb(0, 0, 0)",
                      }}
                      className="reax"
                    >{e.info.slice(0,30)}...
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div onClick={this.navs} className="back-seach">
          HOME
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    anyplay: state.anyplayReducer,
  };
};

export default connect(mapStateToProps, { Nav ,Views,Name})(Search);
