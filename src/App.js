import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js'
import Logo from './components/Logo/Logo.js'
import InputBox from './components/InputBox/InputBox.js'
import Rank from './components/Rank/Rank.js'
import FaceDetect from './components/FaceDetect/FaceDetect.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import 'tachyons'

const app = new Clarifai.App({
 apiKey: 'dbaaa84226be41a7a65c4ff1e2d8de00'
});


const partcitleOption = {
  particles: {
    number : {
        value: 180,
        density : {
          enable: true,
          value_area: 1000
        }
      }
    }
}

const initialState = {
          input:'',
          imageUrl : '',
          box: {},
          route : 'signin',
          isSignedIn : false,
          user : {
                  id: '',
                  name: '',
                  email: '',
                  entries : 0,
                  joined : '' 
          }
}

class App extends Component {
  constructor() {
    super()
    this.state = {initialState}
  }

  
  calcFaceLocation = (data) => {
    const detectedFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width)
    const height = Number(image.height) 

    return {
      leftCol : detectedFace.left_col * width,
      topRow : detectedFace.top_row * height,
      rightCol : width - (detectedFace.right_col * width),
      bottomRow : height - (detectedFace.bottom_row * height)
    }

  }

  displayFaceBox = (box) => {
    this.setState({box : box});
  }

  onInputChange = (event) => {
    this.setState({input : event.target.value})
  }

  onButtonChange = () => {
      this.setState({imageUrl : this.state.input});
      app.models.predict(
        'd02b4508df58432fbb84e800597b8959',
        this.state.input)
      .then(response => {
        this.displayFaceBox(this.calcFaceLocation(response))
        if (response){
          fetch('https://polar-eyrie-22390.herokuapp.com/image',{ 
           method : 'post',
           headers : {"Content-Type" : "application/json"}, 
           body : JSON.stringify({id : this.state.user.id})})
          .then(response => response.json())
          .then(count => Object.assign(this.state.user , {entries : count}))
          .catch(console.log)
        } 
        
      })
      .catch(error => console.log(error));

    }

  onRouteChange = (route) => {
    if (route === 'signin'){
      this.setState(initialState)
    } else if (route === 'Home') {
      this.setState({isSignedIn : true})
    }

    this.setState({route : route})
  }
  loadUser = (info) => {
    this.setState({user: {
              id: info.id,
              name: info.name,
              email: info.email,
              entries : info.entries,
              joined : info.joined 
    }})
  }
  
  render(){
    return (
      <div className='center'>
        <Particles  className = 'particles' params={partcitleOption} />
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
        { this.state.route === 'Home'?
              <div>
              <Logo />
                <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                <InputBox
                 onInputChange={this.onInputChange}
                 onButtonChange={this.onButtonChange} 
                  />  
                <FaceDetect box={this.state.box || initialState.box} imageUrl={this.state.imageUrl}/>
              </div>
           : ( this.state.route === 'signin'?
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              :
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            ) 
        }
      </div>
      )
  }
}


export default App;
