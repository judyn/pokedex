import React, { Component } from 'react';

class AboutPage extends Component {
  render(){

    return(
      <div>
      <h2>About</h2>
      Pokedex React was made with 
      <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer"> Create React App</a> 
      ,
      <a href="https://ant.design/" target="_blank" rel="noopener noreferrer"> Ant Design </a>
      and
      <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer"> PokeApi</a>.
      </div>
    )
  }
};

export default AboutPage;