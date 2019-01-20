import React, { Component } from 'react';
import {Card, Col, Row} from 'antd';

class Home extends Component {
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

  render(){

    const { pokemon } = this.state;
    const styles = {
      textTransform: 'capitalize'
    };

    return(
      <div>
      <Row gutter={16}>
      {pokemon.map( (mon,i) => 
        <Col span={6}>
          <Card title={mon.name} size="small" key={i}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`}/>
          </Card>
        </Col>
      )}    
    </Row>
      </div>
    )
  }
};

export default Home;