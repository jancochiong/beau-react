import React from 'react';
import './BeerStorePagination.css';
// {props.prevPage ? <span className="BeerPaginationPrev" onClick={()=>props.click(props.prevPage)}>Prev</span> : null}
// {props.nextPage ? <span className="BeerPaginationNext" onClick={()=>props.click(props.nextPage)}>Next</span> : null}

//<span className="BeerStorePaginationPrev">Prev</span>
//<span className="BeerStorePaginationNext">Next</span>
const BeerStorePagination = (props) => {
	return(
		<div className="BeerStorePagination">
			{props.prevPage ? <span className="BeerStorePaginationPrev" onClick={()=>props.click(props.prevPage)}>Prev Store</span> : null}
			{props.nextPage ? <span className="BeerStorePaginationNext" onClick={()=>props.click(props.nextPage)}>Next Store</span> : null}
			<div className="clearfix"></div>
		</div>
	)
}

export default BeerStorePagination;