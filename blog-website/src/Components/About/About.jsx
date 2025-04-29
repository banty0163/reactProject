import React from "react";
import { NavLink } from "react-router-dom";

export default function About() {
  return(
     <>
      <h1>This is about page</h1>
     
      <p>This page contains information about our website.</p>
      <NavLink to="/about/child">ChildComponent</NavLink> 
      <NavLink to="/previous">previous</NavLink> 
      
     </>
  )
}
