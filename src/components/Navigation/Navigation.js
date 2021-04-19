import React from 'react';
import 'tachyons'


const Navigation = ({onRouteChange,isSignedIn}) => {
	if (isSignedIn){
		return(
				<nav style={{display : 'flex', justifyContent : 'flex-end'}}>
					<p onClick ={() => onRouteChange('signin')}className = 'f4 link dim black underline pa3 pointer'>Sign Out</p>
				</nav>
			)
	}
	else {
		return(
				<nav style={{display : 'flex', justifyContent : 'flex-end'}}>
					<p onClick ={() => onRouteChange('signin')}className = 'f4 link dim black underline pa3 pointer'>Sign in</p>
					<p onClick ={() => onRouteChange('Register')}className = 'f4 link dim black underline pa3 pointer'>Register</p>
				</nav>
			)
	}
	

}

export default Navigation