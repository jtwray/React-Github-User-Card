import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {User} from './components/User'
import {Followers} from './components/Followers'

export default class App extends React.Component {
state={
  user:{},
}
componentDidMount(){
  axios.get(`https://api.github.com/users/jtwray`)
  .then(res=>this.setState({user:res.data}))
  .then(_=>console.log(this.state.user))
.then(this.fetchFollowers())
  .catch(err=>console.error(err))

  
 
}

 fetchFollowers=()=>{
  axios.get(`https://api.github.com/users/jtwray/followers`)
  .then(res=>this.setState({followers:res.data}))
  .then(_=>console.log(this.state.followers))

  .catch(err=>console.error(err))

}
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <User userData={this.state.user}/>
      <Followers followersData={this.state.followers}/>
    </div>
  );
}

}
