import React from 'react'
import 'tachyons'



class Register extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	name : '',
			email : '',
			password :''
	    }
    }
	onNameChange = (event) => {
		this.setState({name : event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({email : event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password : event.target.value})
	}
    
    
    
	onButtonSubmit = () => {
		
		fetch('https://polar-eyrie-22390.herokuapp.com/register', {
			method : 'post',
			headers : {'Content-Type' : 'application/json'},
			body : JSON.stringify({
				name: this.state.name,
				email : this.state.email,
				password : this.state.password
			})
		}).then(response => response.json())
		  .then(user => {
		  	if (user.id){
		  		this.props.loadUser(user);
		  		this.props.onRouteChange('Home')
		  	}
		  }).catch(console.log)
	}
	render(){
				return (
						<article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
							<main className="pa4 black-80" >
							  	<div className="measure">
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
								      <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
								      <div className="mt3">
								        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
								        <input 
								        onChange ={this.onNameChange}
								        className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
								        type="text" name="name"  id="name" />
								      </div>
								      <div className="mt3">
								        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
								        <input 
								        onChange ={this.onEmailChange}
								        className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
								        type="email" name="email-address"  id="email-address" />
								      </div>
								      <div className="mv3">
								        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
								        <input 
								        onChange ={this.onPasswordChange}
								        className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" 
								        type="password" 
								        name="password"  
								        id="password" />
								      </div>
								    </fieldset>
								    <div className="">
								      <input onClick={this.onButtonSubmit}className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
								    </div>
								</div>
							</main>
						</article>
		)
	}
	
}

export default Register;