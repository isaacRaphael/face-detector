import React from 'react'
import { Component } from 'react';
import 'tachyons'

class SignIn extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	      	signInEmail : '',
			signInPassword : ''
	    }
    }

	onEmailChange = (event) => {
		this.setState({signInEmail : event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({signInPassword : event.target.value})
	}
	onButtonSubmit = () => {
		fetch('https://polar-eyrie-22390.herokuapp.com/signin', {
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				email : this.state.signInEmail,
				password : this.state.signInPassword
			})
		}).then(response => response.json())
		  .then(user => {
		  	if (user.id){
		  		this.props.loadUser(user);
		  		this.props.onRouteChange('Home')
		  	}
		  })
	}
	render(){
		return (
			<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
				<main className="pa4 black-80" >
				  	<div className="measure">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
					      <legend className="f1 fw6 ph0 mh0 tc">Sign In</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
					        <input onChange = {this.onEmailChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
					        <input onChange = {this.onPasswordChange} className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
					      </div>
					    </fieldset>
					    <div className="">
					      <input onClick={this.onButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
					    </div>
					    <div className="lh-copy mt3">
					      <p  className="f6  black db ">New User?</p>
					      <p onClick={() => this.props.onRouteChange('Register')} href="#0" className="f5 link dim black db pointer">Register</p>
					    </div>
					</div>
				</main>
			</article>
		)
	}

}

// const SignIn = ({onRouteChange}) => {
	
// }

export default SignIn;