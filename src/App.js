import React,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {this.setState({robots: users })});
}
		



	onSearchChanges = (event) => {
		this.setState({ searchfield: event.target.value })
		
	
	}
	render(){
		const { robots, searschfield } this.state;
		const filteredRobots = 
robots.filter(robots=> {return robots.name.toLowerCase().includes(searchfield.toLowerCase())}); 
		return !robots.length ?
		<h1>LOADING</h1> :
		(
			<div className='tc'>
				<h1 className='F4'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChanges}/>
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
	
}

export default App;