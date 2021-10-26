import React, { Component } from 'react'
import './form.css'
import { ReactComponent as User } from './user.svg'
import Profile from '../../profile'
import Account from '../../account'
import Accounts from '../../accounts'
import Home from '../../home'


import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class Form extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        image: '',
        check: false,
        direct: false,
        picture: false,
        size: window.innerWidth,
        home:false,
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
       // this.props.Accounts()
        const h= this.state.home===false?false:true
        this.props.Home(h)
       
    }

    profile = (e) => {

        let files = e.target.files;
        let file = files[0];
        let formdata = new FormData();
        formdata.append('file', file)


        let reader = new FileReader();
        reader.readAsDataURL(files[0])


        return reader.onload = (e) => {

         fetch(`https://cloudfoundapi.herokuapp.com/cloudfound/photos`, { method: 'POST', body: formdata }).then((response) => response.json()).then(data => {

                const { path } = data;
                  this.setState({ image: path, })
            })


        }
    }


    handleSeach = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    };

    submit =(event) => {
        event.preventDefault();


       const include= this.state.email.split('').includes('@'&&'.')
     
        if (this.state.image.length > 1) {
            if (this.state.firstname.length > 3 && this.state.lastname.length > 3 && this.state.email.length > 3 && this.state.password.length > 4&&include ) {
               
                const date = new Date();
                const year = date.getFullYear()
                const hour = date.getHours();
                const min = date.getMinutes()
                const munt = date.getUTCMonth()
                const day = date.getUTCDay()
    
               this.setState({home:true})
               
              const data = {
                    image: this.state.image,
                    user_name: this.state.firstname,
                    user_lastname: this.state.lastname,
                    user_email: this.state.email,
                    user_password: this.state.password,
                    date: `${hour}:${min}-${day}/${munt}/${year}`,
                };

               
                    this.setState({
                        image: '',
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                    })

                const timestemp = async () => {
 
                    await fetch(`http://localhost:8080/xtrail/accountpost`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)
                
                    }).then((response) => response.json()).then(data => {
                        this.setState({ indexs: !this.state.indexs });
                        this.props.Profile(data.image)
                        localStorage.setItem('accont', JSON.stringify([data]))
                        this.props.Account([data])
                    
                    }).catch(console.log('error occares in form'))
            
           



                    setTimeout(() => {
                        this.setState({
                            direct: true,
                      
                        })
                        const h = this.state.home === false ? false : true
                        this.props.Home(h)
                    }, 2000)
                }
                timestemp()
            }
            else {

                this.setState({
                    check: true
                })

            }

        } else {
            this.setState({
                picture: true,
                check: true,
            })
        }
    
    

    }

    check = () => {
        this.setState({
            check: false,
            picture: false,
        })
    }

    render() {

        if (this.state.direct === true) {

            return <Redirect to='/' />
        }

        return (
            <div style={{ height: this.state.size < 620 ? ' 700px' : window.innerHeight }} className={this.state.size < 620 ?'mobile-form' :"form"}>
                <div style={{ width:this.state.size<620?'100%':'400px' ,borderRadius: this.state.size<620?'0px':'13px'}} className="form-box">
                    <div className="form-pic">
                        <div className="box1in">
                            <img src={'./uploads/logo.png'} alt='mors' className='logo-icon' />
                        </div>
                        <div className="box2in">
                            {this.state.image.length < 1 && <User onClick={this.check} style={{ border:this.state.picture=== true&& '3px solid rgb(233, 0, 0)',fill:this.state.picture===true?'rgb(233, 0, 0)':'rgb(255, 255, 255);'}}  className='user-icon-form' />}
                            {this.state.image.length < 1 && <input type='file' className='mltn' onChange={(e) => { this.profile(e) }} name='img' />}
                            {this.state.image.length > 1 && <img src={this.state.image} alt='mors' className='logo-icon-form2' />}

                        </div>

                    </div>
                    <div className="form-body">
                        <div className="form-text"><h1>signup</h1></div>
                        <div className="form-body-t">
                            <input onClick={this.check} value={this.state.firstname} name='firstname' onChange={this.handleSeach} placeholder='Fist_Name' className='form-input' />
                            <div className="validate">
                                <p style={{ color: this.state.check === true ? 'rgb(255, 0, 0)' : this.state.firstname.length >= 1 && this.state.firstname.length <= 4 && 'rgb(255, 0, 0)' }} className="validate-me">
                                    {this.state.picture===true? 'please choose the image':this.state.check === true ? 'please fill the form' : this.state.firstname.length >= 1 && this.state.firstname.length <= 4 ? 'minimum of 6 words required' : this.state.firstname.length > 4 && this.state.firstname.length <= 5 ? 'good' : ''}
                                </p>
                            </div>
                        </div>

                        <div className="form-body-t">
                            <input onClick={this.check} value={this.state.lastname} name='lastname' onChange={this.handleSeach} placeholder='Last_Name' className='form-input' />
                            <div className="validate">

                                <p style={{ color: this.state.check === true ? 'rgb(255, 0, 0)' : this.state.lastname.length >= 1 && this.state.lastname.length <= 4 && 'rgb(255, 0, 0)' }} className="validate-me">
                                    {this.state.picture===true? 'please choose the image':this.state.check === true ? 'please fill the form' : this.state.lastname.length >= 1 && this.state.lastname.length <= 4 ? 'minimum of 6 words required' : this.state.lastname.length > 4 && this.state.lastname.length <= 5 ? 'good' : ''}
                                </p>
                            </div>
                        </div>


                        <div className="form-body-t">
                            <input onClick={this.check} value={this.state.email} name='email' onChange={this.handleSeach} placeholder='Email' className='form-input' />
                            <div className="validate">

                                <p style={{ color: this.state.check === true ? 'rgb(255, 0, 0)' : this.state.email.length >= 1 && this.state.email.length <= 4 && 'rgb(255, 0, 0)' }} className="validate-me">
                                    {this.state.picture===true? 'please choose the image':this.state.check === true ? 'please fill the form' : this.state.email.length >= 1 && this.state.email.length <= 4 ? 'minimum of 6 words required' : this.state.email.length > 4 && this.state.email.length <= 5 ? 'good' : ''}
                                </p>
                            </div>
                        </div>


                        <div className="form-body-t">
                            <input onClick={this.check} type='password' value={this.state.password} name='password' onChange={this.handleSeach} placeholder='Password' className='form-input' />
                            <div className="validate">

                                <p style={{ color: this.state.check === true ? 'rgb(255, 0, 0)' : this.state.password.length >= 1 && this.state.password.length <= 4 && 'rgb(255, 0, 0)' }} className="validate-me">
                                    {this.state.picture===true? 'please choose the image':this.state.check === true ? 'please fill the form' : this.state.password.length >= 1 && this.state.password.length <= 4 ? 'minimum of 6 words required' : this.state.password.length > 4 && this.state.password.length <= 5 ? 'good' : ''}
                                </p>
                            </div>
                        </div>



                    </div>
                    <div className="form-signup">
                        <div onClick={this.submit} className="sign-botton">signup</div>
                        <div onClick={() => this.props.history.push('./login')} className="sign-botton">login</div>

                    </div>
                </div>

            </div>);
    }
}

const mapStateToProps = state => {
    return {
        anyplay: state.anyplayReducer,
    }
};

export default connect(mapStateToProps, { Profile,Account,Accounts,Home })(Form)
