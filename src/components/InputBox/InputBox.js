import React from 'react';
import './InputBox.css'
import 'tachyons'



const InputBox = (props) => {
	let onInputChange = props.onInputChange;
	let onButtonChange = props.onButtonChange;
	return (
		<div>
		<p className = 'f4'>{'This app auto detects the face in any picture,Provide a link to a picyure below'}</p>
		<div className ='centered' >
			<div className='centered pa4 br3 shadow-1 form '>
				<input type='text'  className='centered f4 pa2 w-70 ' onChange= {onInputChange}/>
				<button className = 'w-30 grow f6 tc lin ph3 pv2 white bg-blue' onClick = {onButtonChange}>Detect</button>
			</div>
		</div>
		</div>

		)
}


export default InputBox