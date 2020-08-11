import React,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
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
		const filteredRobots = 
this.state.robots.filter(robots=> {return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())}); 
		if (this.state.robots.length === 0) {
			return <h1>LOADING</h1>
		} else {
			return(
			<div className='tc'>
				<h1 className='F4'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChanges}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
			);
		}
	}	
}

export default App;