import React, { Component } from 'react'
import './form.css'
import Profile from '../../profile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Account from '../../account'
import Accounts from '../../accounts'
import Home from '../../home'


class Login extends Component {
    state = {

        email: '',
        password: '',
        image: 'login',
        check: false,
        direct: false,
        adding: false,

        accounts: this.props.anyplay.accounts,

        home:false,

        size: window.innerWidth,
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

    handleSeach = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    };


    componentWillReceiveProps(nextProps) {
        if (nextProps.anyplay) {
            this.setState({
                accounts: nextProps.anyplay.accounts,
            })
        }
    }

    submit = event => {
        event.preventDefault();

        const include= this.state.email.split('').includes('@'&&'.')
     
        if (this.state.email.length > 5 && this.state.password.length > 6 && include) {

            const datar = {
                user_email: this.state.email,
                user_password: this.state.password
            }

            const  timestemper=async()=>{
            await fetch(`http://localhost:8080/xtrail/accountget`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(datar)
                
            }).then((response) => response.json()).then(data => {
                
                if (data.erros === 'account found') {
                    this.setState({ home: true })
                    const account = data.payload.image
                    this.setState({ indexs: !this.state.indexs });
                    this.props.Profile(account)
                    localStorage.setItem('accont', JSON.stringify([data.payload]))
                    this.props.Account(data.payload)
                    setTimeout(() => {
                        this.setState({

                            email: '',
                            password: '',
                        })
                    }, 30)

            

                } else {
                    this.setState({
                        check: true
                    })
                }
            }).catch(console.log('error occares in form'))
        }
        timestemper()
            

        setTimeout(() => {
               
               
               
            const h=this.state.home===false?false:true
            this.props.Home(h)
            setTimeout(() => {
                this.setState({
                    direct: true,
                    
                })

            }, 100)


        }, 2000)


           
        } 
        else {
            this.setState({
                check: true
            })

        }

    }




    check = () => {
        this.setState({
            check: false
        })
    }

    render() {


        if (this.state.direct === true) {

            return <Redirect to='/' />
        }
       



        return (
            <div style={{ height: this.state.size < 620 ? ' 700px' : window.innerHeight }} className={this.state.size < 620 ? 'mobile-form' : "form"}>
                <div style={{ width: this.state.size < 620 ? '100%' : '400px', borderRadius: this.state.size < 620 ? '0px' : '13px' }} className="form-box">
                    <div className="form-pic">
                        <div className="box1in">
                            <img src={'./uploads/logo.png'} alt='mors' className='logo-icon' />
                        </div>
                        <div className="box2in">

                        </div>

                    </div>
                    <div className="form-body">
                        <div className="form-text"><h1>Login</h1></div>

                        <div className="form-body-t">
                            <input onClick={this.check} value={this.state.email} name='email' onChange={this.handleSeach} placeholder='Email' className='form-input' />
                            <div className="validate">

                                <p style={{ color: this.state.check === true || this.state.check === 'not' ? 'rgb(255, 0, 0)' : this.state.email.length >= 1 && this.state.email.length <= 4 && 'rgb(255, 0, 0)' }} className="validate-me">
                                    {this.state.check === true ? 'please fill the form' : this.state.check === 'not' ? 'account not found' : this.state.email.length >= 1 && this.state.email.length <= 4 ? 'minimum of 6 words required' : this.state.email.length > 4 && this.state.email.length <= 5 ? 'good' : ''}
                                </p>
                            </div>
                        </div>


                        <div className="form-body-t">
                            <input onClick={this.check} type='password' value={this.state.password} name='password' onChange={this.handleSeach} placeholder='Password' className='form-input' />
                            <div className="validate">

                                <p style={{ color: this.state.check === true || this.state.check === 'not' ? 'rgb(255, 0, 0)' : this.state.password.length >= 1 && this.state.password.length <= 4 && 'rgb(255, 0, 0)' }} className="validate-me">
                                    {this.state.check === true ? 'please fill the form' : this.state.check === 'not' ? 'account not found' : this.state.password.length >= 1 && this.state.password.length <= 4 ? 'minimum of 6 words required' : this.state.password.length > 4 && this.state.password.length <= 5 ? 'good' : ''}
                                </p>
                            </div>
                        </div>
                        <div style={{ width: '100%', height: '30%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', color: 'rgb(25,152,255)' }}>
                            <small style={{ color: 'rgb(247, 0, 255)' }} onClick={() => this.props.history.push('./form')}>Already have account</small>
                        </div>



                    </div>
                    <div className="form-signup">
                        <div onClick={this.submit} className="sign-botton">login</div>

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

export default connect(mapStateToProps, { Profile, Account, Accounts,Home })(Login)
