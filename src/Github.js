
/************************************************************
* Project: Webpage for Top 6 blockchain organizations
* Author: Garrett Pement
* Date: 1/22/2018
* Description: This is a react webpage that utilizes Axios to make several asynchronous API calls
			   and then displays the data on an interactive webpage. The different currency information is
			   displayed via the navbar at the top of the webpage.
*****************************************************************/			   


import React, { Component } from 'react';
import axios from 'axios';
import './App.css';


class GitHub extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requestFailed: false
		}

	}

	//clickHandler takes in a string representing the currency type. From there, it populates the DOM elements with data called
	//during the api call via Axios.

	clickHandler(type) {

		if(type == 'bitcoin'){
			document.getElementById("name").innerText = this.state.bitcoinData.name;
			document.getElementById("description").innerText = this.state.bitcoinData.description;
			document.getElementById("language").innerText = this.state.bitcoinData.language;
			document.getElementById("open_issues").innerText = this.state.bitcoinData.open_issues;
			document.getElementById("forks").innerText = this.state.bitcoinData.forks;
			document.getElementById("homepage").innerText = this.state.bitcoinData.homepage;
			document.getElementById("logo").src = this.state.bitcoinData.organization.avatar_url;
		}
		else if(type == 'ethereum'){
			document.getElementById("name").innerText = this.state.ethereumData.name;
			document.getElementById("description").innerText = this.state.ethereumData.description;
			document.getElementById("language").innerText = this.state.ethereumData.language;
			document.getElementById("open_issues").innerText = this.state.ethereumData.open_issues;
			document.getElementById("forks").innerText = this.state.ethereumData.forks;
			document.getElementById("homepage").innerText = this.state.ethereumData.homepage;
			document.getElementById("logo").src = this.state.ethereumData.organization.avatar_url;
		}
		else if(type == 'litecoin'){
			document.getElementById("name").innerText = this.state.litecoinData.name;
			document.getElementById("description").innerText = this.state.litecoinData.description;
			document.getElementById("language").innerText = this.state.litecoinData.language;
			document.getElementById("open_issues").innerText = this.state.litecoinData.open_issues;
			document.getElementById("forks").innerText = this.state.litecoinData.forks;
			document.getElementById("homepage").innerText = this.state.litecoinData.homepage;
			document.getElementById("logo").src = this.state.litecoinData.organization.avatar_url;
		}

		else if(type == 'ripple'){
			document.getElementById("name").innerText = this.state.rippleData.name;
			document.getElementById("description").innerText = this.state.rippleData.description;
			document.getElementById("language").innerText = this.state.rippleData.language;
			document.getElementById("open_issues").innerText = this.state.rippleData.open_issues;
			document.getElementById("forks").innerText = this.state.rippleData.forks;
			document.getElementById("homepage").innerText = this.state.rippleData.homepage;
			document.getElementById("logo").src = this.state.rippleData.organization.avatar_url;
		}

		else if(type == 'bitcoinCash'){
			document.getElementById("name").innerText = this.state.bitcoinCashData.name;
			document.getElementById("description").innerText = this.state.bitcoinCashData.description;
			document.getElementById("language").innerText = this.state.bitcoinCashData.language;
			document.getElementById("open_issues").innerText = this.state.bitcoinCashData.open_issues;
			document.getElementById("forks").innerText = this.state.bitcoinCashData.forks;
			document.getElementById("homepage").innerText = this.state.bitcoinCashData.homepage;
			document.getElementById("logo").src = this.state.bitcoinCashData.owner.avatar_url;
		}

		else if(type == 'cardano'){
			document.getElementById("name").innerText = this.state.cardanoData.name;
			document.getElementById("description").innerText = this.state.cardanoData.description;
			document.getElementById("language").innerText = this.state.cardanoData.language;
			document.getElementById("open_issues").innerText = this.state.cardanoData.open_issues;
			document.getElementById("forks").innerText = this.state.cardanoData.forks;
			document.getElementById("homepage").innerText = this.state.cardanoData.homepage;
			document.getElementById("logo").src = this.state.cardanoData.organization.avatar_url;
		}





	}

	//This is where the apis are called and the data is stored in the react component.

	componentDidMount() {

		//This axios all call will pull data from each API
		axios.all([
			axios.get(`https://api.github.com/repos/bitcoin/bitcoin`, {headers:{ "Authorization": "token 184e665271c09c2433ddd173c41d1a021cca75c4"}}),
			axios.get(`https://api.github.com/repos/ethereum/go-ethereum`, {headers:{ "Authorization": "token 184e665271c09c2433ddd173c41d1a021cca75c4"}}),
			axios.get(`https://api.github.com/repos/litecoin-project/litecoin`, {headers:{ "Authorization": "token 184e665271c09c2433ddd173c41d1a021cca75c4"}}),
			axios.get(`https://api.github.com/repos/ripple/ripple`, {headers:{ "Authorization": "token 184e665271c09c2433ddd173c41d1a021cca75c4"}}),
			axios.get(`https://api.github.com/repos/Bitcoin-ABC/bitcoin-abc`, {headers:{ "Authorization": "token 184e665271c09c2433ddd173c41d1a021cca75c4"}}),
			axios.get(`https://api.github.com/repos/input-output-hk/cardano-sl`, {headers:{ "Authorization": "token 184e665271c09c2433ddd173c41d1a021cca75c4"}})
			])
		//Once the api data has been pulled, we spread each result into temporary variables
		.then(axios.spread((bitcoinRes, ethereumRes, litecoinRes, rippleRes, bitcoinCashRes, cardanoRes) => {
			console.log(bitcoinRes.data);
			console.log(ethereumRes.data);
			console.log(litecoinRes.data);
			console.log(rippleRes.data);
			console.log(bitcoinCashRes.data);
			console.log(cardanoRes.data);

			//We then set the resulting data into a variety of states for further use.
			this.setState({
				bitcoinData: bitcoinRes.data,
				ethereumData: ethereumRes.data,
				rippleData: rippleRes.data,
				bitcoinCashData: bitcoinCashRes.data,
				cardanoData: cardanoRes.data,
				litecoinData: litecoinRes.data
			})
		}), () => {
			//if any of the requests failed, we set the requestFailed state to true for use further on
			this.setState({
				requestFailed: true
			})
		})




	}







	render() {

		//We check if our state has a failed state. If so, we return a failed message.
		if (this.state.requestFailed) return <p>Failed!</p>

			//We check to make sure that there is data in each cryptocurrency state. If not, we return 'loading'

			if (!this.state.ethereumData && !this.state.bitcoinData && !this.state.litecoinData && !this.state.rippleData && !this.state.cardanoData) return <p>Loading...</p>
				//Here we return the DOM elements and HTML. When clicking on a navbar element, it calls our clickHandler function and populates the DOM with our api data.
				return (
					<div>
					<div className="navBar">
					
					<ul>
					<li><a href="#bitcoin" onClick={() => this.clickHandler('bitcoin') }> Bitcoin </a></li>
					<li><a href="#ethereum" onClick={() => this.clickHandler('ethereum') }>Ethereum</a></li>
					<li><a href="#ripple" onClick={() => this.clickHandler('ripple') }>ripple</a></li>
					<li><a href="#bitcoinCash"  onClick={() => this.clickHandler('bitcoinCash') }>bitcoinCash</a></li>
					<li><a href="#cardano"  onClick={() => this.clickHandler('cardano') }>cardano</a></li>
					<li><a href="#litecoin" onClick={() => this.clickHandler('litecoin') }>Litecoin</a></li>

					</ul>

					</div>

					<div className="mainCard">
					<img id ="logo" src={this.state.bitcoinData.organization.avatar_url}/>
					<h2 id="name">{this.state.bitcoinData.name}</h2>
					<h3 id="section_title">Description:</h3>
					<p id="description">{this.state.bitcoinData.description}</p>
					<h3 id="section_title">Language:</h3>
					<p id="language">{this.state.bitcoinData.language}</p>
					<h3 id="section_title">open_issues:</h3>
					<p id="open_issues">{this.state.bitcoinData.open_issues}</p>
					<h3 id="section_title">forks:</h3>
					<p id="forks">{this.state.bitcoinData.forks}</p>
					<h3 id="section_title">homepage:</h3>
					<p id="homepage">{this.state.bitcoinData.homepage}</p>


					</div>
					</div>
					)
		}
	} 

	export default GitHub;


