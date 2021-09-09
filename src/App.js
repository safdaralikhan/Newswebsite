
import  './App.css';
import React,{useState} from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'



const App=()=> {
    
  const apikey = process.env.REACT_APP_NEWS_API;

 const [progress, setProgress] = useState(0)

 


    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        color='red'
        height={3}
        progress={progress}
        
      />
  

        <Switch>
          <Route exact path="/general"><News setProgress={setProgress} apikey={apikey}key="general" pageSize={15} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apikey={apikey}key="business" pageSize={15} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apikey={apikey}key="entertainment" pageSize={15} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apikey={apikey}key="health" pageSize={15} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apikey={apikey}key="science" pageSize={15} country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apikey={apikey}key="sports" pageSize={15} country="in" category="sports"/></Route>


         
        
        </Switch>
        </Router>

      

      
      </div>
    )
 
}
 export default App