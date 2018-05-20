import React, { Component } from 'react';
import './BeerDescription.css';
import axios from 'axios';
import BeerStore from '../BeerStore/BeerStore';
import BeerStorePagination from '../BeerStore/BeerStorePagination/BeerStorePagination';

class BeerDescription extends Component{
	state = {
		beer: null,
		store: null,
		storePager: []
	}
	componentDidUpdate () {
		if(this.props.id){
	        if ( !this.state.beer || (this.state.beer && this.state.beer.id !== this.props.id )) {
	            const token = 'MDoxZjVmM2I3MC01YmVmLTExZTgtOWJjMy1mYjNlYjU3NmRiYzM6cDRmWGdZZUtPMEE0VEtKN0VJRTFsTTkxdXUzTzZiTnp5anFE';
			    const beerDescriptionCall = {
				    method: 'get',
				    url: 'https://lcboapi.com/products/'+this.props.id,
				    headers: {
				    	"Authorization": 'Token '+token,
					}
				  };
				axios.request(beerDescriptionCall).then(response => {
			    	//console.log(response);
			      	this.setState({beer: response.data.result});

			      	const beerStoreCall = {
					    method: 'get',
					    url: 'https://lcboapi.com/stores?per_page=10&product_id='+this.props.id,
					    headers: {
					    	"Authorization": 'Token '+token,
						}
					};
					axios.request(beerStoreCall).then(response => {
						//console.log(response);
						this.setState({
							store: response.data.result,
							storePager: response.data.pager
						});
					});
			    });
	        }
	     }
    }

    beerStorePaginationClick = (storePageNumber) => {
    	//console.log(storePageNumber);

    	const token = 'MDoxZjVmM2I3MC01YmVmLTExZTgtOWJjMy1mYjNlYjU3NmRiYzM6cDRmWGdZZUtPMEE0VEtKN0VJRTFsTTkxdXUzTzZiTnp5anFE';
	    const config = {
		    method: 'get',
		    url: 'https://lcboapi.com/stores?per_page=10&page='+storePageNumber,
		    headers: {
		    	"Authorization": 'Token '+token,
			}
		  };
		axios.request(config).then(response => {
	    	//console.log(response);
	      	this.setState({
	      		store: response.data.result,
	      		storePager: response.data.pager
	      	});
	    });
    }

	render(){
		let BeerDescription = <p style={{textAlign: 'center'}}>Please select a beer</p>;
		let beerStore = null;
		let beerStorePagination = null;
		if(this.state.store){
			beerStorePagination = <BeerStorePagination
									prevPage={this.state.storePager.previous_page}
									nextPage={this.state.storePager.next_page}
									click={this.beerStorePaginationClick}
									/>
			beerStore = this.state.store.map(store => {
				return <BeerStore
							key={store.id}
							name={store.name}
							address1={store.address_line_1}
							address2={store.address_line_2}
						/>;
			});
		}
		if(this.state.beer){
			BeerDescription = (
				<div className="BeerDescriptionContainer">
					<h1>Beer Description</h1>
					<table>
						<tbody>
							<tr>
								<td>Name:</td>
								<td>{this.state.beer.name}</td>
							</tr>
							<tr>
								<td>Producer Name:</td>
								<td>{this.state.beer.producer_name}</td>
							</tr>
							<tr>
								<td>Tasting Note:</td>
								<td>{this.state.beer.testing_note}</td>
							</tr>
							<tr>
								<td>Serving Suggestion:</td>
								<td>{this.state.beer.serving_suggestion}</td>
							</tr>
							<tr>
								<td>Description:</td>
								<td>{this.state.beer.description}</td>
							</tr>
						</tbody>
					</table>
					{beerStore}
					{beerStorePagination}
				</div>
			)
		}

		return(BeerDescription);
	}
}

export default BeerDescription;