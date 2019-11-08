import React from 'react';
import "./App.css"
import { Route, BrowserRouter } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile" 
import { Dialogs } from "./components/Dialogs/Dialogs" 





const App = (props) => {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar friends={props.state.friends}/> 

      <Route path="/dialogs" render={ () => <Dialogs dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData}/> }/> 
      <Route path="/profile" render={ () => <Profile addPost={props.addPost} profilePage={props.state.profilePage} updateNewPOsText={props.updateNewPOsText} /> } />
    </div>  
    </BrowserRouter>
  )
}


export default App;
