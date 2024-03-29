import React from 'react';
import "./App.css"
import { Route, BrowserRouter } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile" 
import { Dialogs } from "./components/Dialogs/Dialogs" 




const App = (props) => {
 console.log (props)
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar /> 

      <Route path="/dialogs" render={ () => <Dialogs dispatch={props.dispatch} messagesData={props.state.dialogs}/> }/> 
      <Route path="/profile" render={ () => <Profile dispatch={props.dispatch} profilePage={props.state.profile}  /> } />
    </div>  
    </BrowserRouter>
  )
}


export default App;
