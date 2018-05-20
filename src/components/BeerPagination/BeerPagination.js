import React from 'react';
import './BeerPagination.css';

const BeerPagination = (props) => {
	return(
		<div className="BeerPagination">
			{props.prevPage ? <span className="BeerPaginationPrev" onClick={()=>props.click(props.prevPage)}>Prev Beer</span> : null}
			{props.nextPage ? <span className="BeerPaginationNext" onClick={()=>props.click(props.nextPage)}>Next Beer</span> : null}
			<div className="clearfix"></div>
		</div>
	)
}

export default BeerPagination;