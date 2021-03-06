import React,{Component} from 'react';
// import {robots} from './robots';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchField:"",
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>response.json()).then(user => this.setState({robots:user}));
    }

    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})    
    }
        render(){
            const {robots,searchField}=this.state;
            const filteredRobotsList = robots.filter((robot)=>{
                return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });
            return( 
                <div className="tc">
                    <h1>Robo Friends </h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobotsList} />
                </Scroll>
                </div>
            );
        }
}

export default App;
