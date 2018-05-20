import React, { Component } from 'react';
import BeerList from '../../components/BeerList/BeerList';
import BeerPagination from '../../components/BeerPagination/BeerPagination';
import BeerDescription from '../../components/BeerDescription/BeerDescription';
import axios from 'axios';
import './BeerApp.css';

class BeerApp extends Component{
	state = {
		beers: [],
		pager: [],
		selectedBeerId: null
	}
	componentDidMount(){
		const token = 'MDoxZjVmM2I3MC01YmVmLTExZTgtOWJjMy1mYjNlYjU3NmRiYzM6cDRmWGdZZUtPMEE0VEtKN0VJRTFsTTkxdXUzTzZiTnp5anFE';
	    const config = {
		    method: 'get',
		    url: 'https://lcboapi.com/products?per_page=8',
		    headers: {
		    	"Authorization": 'Token '+token,
			}
		  };
	    axios.request(config).then(response => {
	    	//console.log(response);
	      	this.setState({
	      		beers: response.data.result,
	      		pager: response.data.pager
	      	});
	    });
	}
	beerPaginationClick = (pageNumber) => {
		const token = 'MDoxZjVmM2I3MC01YmVmLTExZTgtOWJjMy1mYjNlYjU3NmRiYzM6cDRmWGdZZUtPMEE0VEtKN0VJRTFsTTkxdXUzTzZiTnp5anFE';
	    const config = {
		    method: 'get',
		    url: 'https://lcboapi.com/products?per_page=8&page='+pageNumber,
		    headers: {
		    	"Authorization": 'Token '+token,
			}
		  };
		axios.request(config).then(response => {
	    	//console.log(response);
	      	this.setState({
	      		beers: response.data.result,
	      		pager: response.data.pager
	      	});
	    });
	}

	beerSelectedClick = (beerId) =>{
		//console.log(beerId);
		this.setState({selectedBeerId: beerId});
	}

	render(){
		const beers = this.state.beers.map(beer => {
			return <BeerList 
						key={beer.id} 
						beerImg={beer.image_thumb_url} 
						beerName={beer.name}
						click={ () => this.beerSelectedClick(beer.id) }
					/>
		});
		return(
			<div>
				<BeerPagination 
					prevPage={this.state.pager.previous_page}
					nextPage={this.state.pager.next_page}
					click={this.beerPaginationClick}
				/>

				<div className="BeerListContainer">
					{beers}
					<div className="clearfix"></div>
				</div>

				<BeerDescription id={this.state.selectedBeerId}/>
			</div>
		);
	}
}

export default BeerApp;