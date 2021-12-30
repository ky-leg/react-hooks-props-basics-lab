import React from "react";
import user from "../data/user"
import Links from "./Links"

function About(props) {
  let isThere
  if (props.bio === "" || props.bio === null || props.bio === undefined){
    isThere = false
  } 
  else {
    isThere = true 
  }
  console.log(isThere)
  return (
    <div id="about">
      <h2>About Me</h2>
      {isThere ? <p>{props.bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
