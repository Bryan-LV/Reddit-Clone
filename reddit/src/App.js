import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Hero from './components/Hero';
import Usersignup from './components/Forms/Usersignup'
import Login from './components/Forms/Login';
import NewPost from './components/Posts/newPost';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Hero}/>
        <Route path='/signup' component={Usersignup}/>
        <Route path='/auth' component={Login}/>
        <Route path='/newpost' component={NewPost}/>
        <Route path='/home' component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
