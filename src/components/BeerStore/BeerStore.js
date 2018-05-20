import React from 'react';
import './BeerStore.css';

const BeerStore = (props) => {
	return (
			<div className="BeerStoreList">
				<p>
					Store Name: {props.name}<br/>
					Address: {props.address1} {props.address2}
				</p>
			</div>
		);
}

export default BeerStore;