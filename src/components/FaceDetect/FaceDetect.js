import React from 'react'
import './FaceDetect.css'

const FaceDetect = ({imageUrl, box}) => {
	return (
		<div className = 'centered  ma mt4'>
			<div className="containing">
				<img id ='inputImage' src={imageUrl} alt ="" style={{width : '500px', height : 'auto'}} />
				<div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>
				</div>
			</div>
		</div>
	)
}





export default FaceDetect;