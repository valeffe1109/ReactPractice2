import React,{Component} from 'react';
import './App.css';
import NavBar from './components/NavBar.jsx'
import SearchForm from './components/SearchForm'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { search: [] }
  }
  state = {  }
  render() { 
    return ( 
      <Router>
      <NavBar/>
      <Route path="/search" component={SearchForm}/>
      </Router>
     );
  }







}







 
export default App;

