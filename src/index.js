import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import firebase from './firebase.js'
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "views/Home.js";
import Project from "views/Project.js";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

//TODO: json 파일 경로 변경 , function 추가


console.log(firebase);

ReactDOM.render(
  
  <BrowserRouter>
    <Switch>
      <Route 
        path="/" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route 
        path="/home" 
        exact 
        render={props => <Home {...props} />} 
      />
      <Route
        path="/project"
        exact
        render={props => <Project {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);