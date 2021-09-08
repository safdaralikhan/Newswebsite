
import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import NewsItems from "./Components/NewsItems"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
apikey=process.env.REACT_APP_NEWS_API
state={
  progress:10
}

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='red'
        height={3}
        progress={this.state.progress}
        
      />
  

        <Switch>
          <Route exact path="/general"><News setProgress={this.setProgress} apikey={this.apikey}key="general" pageSize={15} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.apikey}key="business" pageSize={15} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.apikey}key="entertainment" pageSize={15} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.apikey}key="health" pageSize={15} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.apikey}key="science" pageSize={15} country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.apikey}key="sports" pageSize={15} country="in" category="sports"/></Route>


         
        
        </Switch>
        </Router>

      

      
      </div>
    )
  }
}
