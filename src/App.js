import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Gallery from "./Gallery"
import Main from './Main'

function App(){
    return(
        <main>       
      <Switch>
      <Route exact path = "/" component = {Main}/>
      <Route exact path = "/gallery" component = {Gallery}/>
      </Switch>
        </main>
    )
}

export default App