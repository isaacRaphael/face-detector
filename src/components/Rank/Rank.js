import React from 'react'


const Rank = ({name, entries}) => {
	return (
		<div>
			<p className = 'f2 white'>{`${name} , your current entry count is...`}</p>
			<div className='white f2 centered '>
	        	{entries}
	      	</div>
		</div>

		)
}

export default Rank;