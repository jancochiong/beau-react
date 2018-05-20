import React from 'react';
import './BeerList.css';


const BeerList = (props) =>{
	return(
		<div className="BeerList" onClick={props.click}>
			<img src={props.beerImg} alt={props.beerName}/>
		</div>
	);
}

export default BeerList;