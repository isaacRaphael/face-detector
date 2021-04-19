import React from 'react';
import facial from './facial.png'
import 'tachyons';


const Logo = () => {
	return (

		<div style = {{display : 'inline-block'}} className = 'br-1 shadow-1 ma4 mt0 grow'>
			<img style={{width : '100px'}} src={facial} alt= 'Logo' />
		</div>

		)
}


export default Logo;