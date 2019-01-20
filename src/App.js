import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemon: []
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151',{
      method:'GET',
    })
    .then( response => response.json())
    .then( json => this.setState({ pokemon: json.results }))
  }

  render() {
    const { pokemon } = this.state;
    const styles = {
      textTransform: 'capitalize'
    };

    console.log(this.state.pokemon);
    
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {pokemon.map( (mon,i) => 
              <li key={mon.name}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
                <p style={styles}> {mon.name} </p>
              </li>
            )}
          </ul>
          
        </header>
      </div>
    );
  }
}

export default App;
